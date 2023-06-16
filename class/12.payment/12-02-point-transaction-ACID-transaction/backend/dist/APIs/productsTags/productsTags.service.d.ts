import { Repository } from 'typeorm';
import { ProductTag } from './entities/productTag.entity';
import { IProductsTagsServiceBulkInsert, IProductsTagsServiceFindByNames } from './interfaces/productsTagsService.interface';
export declare class ProductsTagsService {
    private readonly ProductsTagsRepository;
    constructor(ProductsTagsRepository: Repository<ProductTag>);
    findByNames({ tagNames }: IProductsTagsServiceFindByNames): Promise<ProductTag[]>;
    bulkInsert({ names }: IProductsTagsServiceBulkInsert): Promise<import("typeorm").InsertResult>;
}
