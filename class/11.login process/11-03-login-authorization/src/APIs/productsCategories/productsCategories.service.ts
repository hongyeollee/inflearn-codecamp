import { Injectable } from '@nestjs/common';
import { IProductCategoriesServiceCreate } from './iterfaces/products-categories-service.interface';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsCategoriesService {
  constructor(
    @InjectRepository(ProductCategory)
    private readonly productCategoryRepository: Repository<ProductCategory>,
  ) {}

  create({ name }: IProductCategoriesServiceCreate): Promise<ProductCategory> {
    return this.productCategoryRepository.save({ name });
  }
}
