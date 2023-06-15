import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCheckSoldout,
  IProductServiceCreate,
  IProductServiceDelete,
  IProductServiceFindOne,
  IProductServiceUpdate,
} from './interfaces/products.service.interface';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { ProductsTagsService } from '../productsTags/productsTags.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
    private readonly productsSaleslocationsService: ProductsSaleslocationsService,
    private readonly productsTagsService: ProductsTagsService,
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find({
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  findOne({ productId }: IProductServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({
      where: { id: productId },
      relations: ['productSaleslocation', 'productCategory', 'productTags'],
    });
  }

  async createProduct({
    createProductInput,
  }: IProductServiceCreate): Promise<Product> {
    // 1. 상품 하나만 등록할 때 사용하는 방법
    // const result = this.productsRepository.save({
    //   ...createProductInput,

    // 하드코딩으로 하나하나 나열하는 방식
    // name: '마우스',
    // description: '좋은 마우스',
    // price: 30000,
    //});

    // 2. 상품과 상품 위치를 같이 등록하는 방법
    const { productSaleslocation, productCategoryId, productTags, ...product } =
      createProductInput;

    // 2-1. 상품 거래위치 등록
    const result = await this.productsSaleslocationsService.create({
      productSaleslocation,
    }); //서비스를 경유해야 하는 이유는??
    //  // 레파지토리에 직접 접근하면 검증로직을 통일 시킬 수 없기 때문에!

    // 2-2. 상품 태그 등록
    // productTags가 [#전자제품, #영등포, #컴퓨터]와 같은 패턴이라고 가정
    const tagNames = productTags.map((el) => el.replace('#', ''));
    const prevTags = await this.productsTagsService.findByNames({ tagNames });

    const temp = [];
    tagNames.forEach((el) => {
      const isExist = prevTags.find((prevEl) => el === prevEl.name);
      if (!isExist) {
        temp.push({ name: el });
      }
    });

    const newTags = await this.productsTagsService.bulkInsert({ names: temp }); //bulk-insert ->배열안에 있는걸 한번에 저장한다. save()로는 불가능
    const tags = [...prevTags, ...newTags.identifiers]; //[{id:"xxxID"},{id:"tttId"},{id: yyyID}]

    const result2 = await this.productsRepository.save({
      ...product,
      productSaleslocation: result,
      productCategory: { id: productCategoryId },
      //만약에 name까지 받고싶으면? => createProductInput에 name까지 포함해서 받아오기
      productTags: tags,
    });

    return result2;
  }

  async updateProduct({
    productId,
    updateProductInput,
  }: IProductServiceUpdate): Promise<void> {
    // 기존 있는 내용을 재사용하여, 로직을 통일하자.
    const product = await this.findOne({ productId });

    //검증은 service에서 한다.
    this.checkSoldout({ product });

    //위 if문과 같음
    // if (product.isSoldout) {
    //   throw new HttpException(
    //     '이미 판매완료된 상품입니다.',
    //     HttpStatus.UNPROCESSABLE_ENTITY,
    //   );
    // }

    //this.productsRepository.create() =>DB접속이랑 관련업음
    //this.productsRepository.insert() =>결과를 객체로 못돌려 받는 등록방법
    //this.productsRepository.update() =>결과를 객체로 못돌려 받는 수정방법

    // 숙제1 왜 주석처리한 아래 에러가 발생하는지 고민해보기
    // 숙제2 주석처리한 아래 에러 고치기
    // const result = this.productsRepository.save({
    //   ...product, //수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을때 사용
    //   ...updateProductInput,
    // });
    // return result;
  }
  // checkSoldout을 함수로 만드는 이유 -> 수정시, 삭제시 검증로직 사용
  checkSoldout({ product }: IProductServiceCheckSoldout): void {
    if (product.isSoldout) {
      throw new UnprocessableEntityException('이미 판매완료된 상품입니다.');
    }
  }

  async deleteProduct({ productId }: IProductServiceDelete): Promise<boolean> {
    // // 1. 실제 삭제하는 방법
    // const result = await this.productsRepository.delete({
    //   id: productId,
    // });
    // return result.affected ? true : false;

    //2. 소프트 삭제(직접 구현) - isDeleted
    //this.productsRepository.update({ id: productId },{isDeleted:true});

    //3. 소프트 삭제(직접 구현) - deletedAt
    //this.productsRepository.update({ id: productId }, { deleteAt: new Date() });

    //4. 소프트 삭제(typeorm 기능제공) - softRemove
    //this.productsRepository.softRemove({ id: productId });
    //단점 : id로만 삭제가 가능(name 등과 같은 key는 사용불가)
    //장점 : 여러 id 한번에 지우기 가능 .softRemove([{id:qqq},{id:eee},{id:www}])

    //5. 소프트 삭제(typeorm 기능제공) - softDelete
    const result = await this.productsRepository.softDelete({ id: productId });
    //단점 : 여러 id 한번에 지우기 불가능
    //장점 : 다른 컬럼으로도 삭제 가능
    return result.affected ? true : false;
  }
}
