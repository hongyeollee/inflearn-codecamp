import { Injectable } from '@nestjs/common';
import { In, Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import { InjectRepository } from '@nestjs/typeorm';
import {
  IProductsTagsServiceBulkInsert,
  IProductsTagsServiceFindByNames,
} from './interfaces/productsTagsService.interface';

@Injectable()
export class ProductsTagsService {
  constructor(
    @InjectRepository(ProductTag)
    private readonly ProductsTagsRepository: Repository<ProductTag>,
  ) {}

  findByNames({ tagNames }: IProductsTagsServiceFindByNames) {
    return this.ProductsTagsRepository.find({
      where: { name: In(tagNames) },
    });
  }

  bulkInsert({ names }: IProductsTagsServiceBulkInsert) {
    return this.ProductsTagsRepository.insert(names);
  }
}
