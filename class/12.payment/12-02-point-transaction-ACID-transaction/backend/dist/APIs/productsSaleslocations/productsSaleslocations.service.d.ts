import { Repository } from 'typeorm';
import { ProductSaleslocation } from './entities/productSaleslocation.entity';
export declare class ProductsSaleslocationsService {
    private readonly productSalesRepository;
    constructor(productSalesRepository: Repository<ProductSaleslocation>);
    create({ productSaleslocation }: {
        productSaleslocation: any;
    }): Promise<any>;
}
