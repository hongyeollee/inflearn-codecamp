import { IProductCategoriesServiceCreate } from './iterfaces/products-categories-service.interface';
import { Repository } from 'typeorm';
import { ProductCategory } from './entities/productCategory.entity';
export declare class ProductsCategoriesService {
    private readonly productCategoryRepository;
    constructor(productCategoryRepository: Repository<ProductCategory>);
    create({ name }: IProductCategoriesServiceCreate): Promise<ProductCategory>;
}
