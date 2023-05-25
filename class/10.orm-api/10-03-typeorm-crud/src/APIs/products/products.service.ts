import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductServiceCreate,
  IProductServiceFindOne,
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
}
