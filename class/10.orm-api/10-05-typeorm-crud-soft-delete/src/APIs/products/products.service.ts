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

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product)
    private readonly productsRepository: Repository<Product>, //
  ) {}

  findAll(): Promise<Product[]> {
    return this.productsRepository.find();
  }

  findOne({ productId }: IProductServiceFindOne): Promise<Product> {
    return this.productsRepository.findOne({ where: { id: productId } });
  }

  createProduct({
    createProductInput,
  }: IProductServiceCreate): Promise<Product> {
    const result = this.productsRepository.save({
      ...createProductInput,

      // 하드코딩으로 하나하나 나열하는 방식
      // name: '마우스',
      // description: '좋은 마우스',
      // price: 30000,
    });

    //result 안에는 무엇이 있을까?
    //result={
    //  id: 'skjaoiawer-asdf'(uuid),
    //  name: '마우스',
    //  description: '좋은 마우스',
    //  price : 30000,
    //}
    return result;
  }

  async updateProduct({
    productId,
    updateProductInput,
  }: IProductServiceUpdate): Promise<Product> {
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

    const result = this.productsRepository.save({
      ...product, //수정 후, 수정되지 않은 다른 결과값까지 모두 객체로 돌려받고 싶을때 사용
      ...updateProductInput,
    });
    return result;
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
