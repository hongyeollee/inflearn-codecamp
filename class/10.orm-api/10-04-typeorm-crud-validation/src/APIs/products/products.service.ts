import { Injectable, UnprocessableEntityException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCheckSoldout,
  IProductServiceCreate,
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
}
