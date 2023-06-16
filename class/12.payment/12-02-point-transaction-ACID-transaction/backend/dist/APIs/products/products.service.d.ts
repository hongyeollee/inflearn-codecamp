import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { IProductServiceCheckSoldout, IProductServiceCreate, IProductServiceDelete, IProductServiceFindOne, IProductServiceUpdate } from './interfaces/products.service.interface';
import { ProductsSaleslocationsService } from '../productsSaleslocations/productsSaleslocations.service';
import { ProductsTagsService } from '../productsTags/productsTags.service';
export declare class ProductsService {
    private readonly productsRepository;
    private readonly productsSaleslocationsService;
    private readonly productsTagsService;
    constructor(productsRepository: Repository<Product>, productsSaleslocationsService: ProductsSaleslocationsService, productsTagsService: ProductsTagsService);
    findAll(): Promise<Product[]>;
    findOne({ productId }: IProductServiceFindOne): Promise<Product>;
    createProduct({ createProductInput, }: IProductServiceCreate): Promise<Product>;
    updateProduct({ productId, updateProductInput, }: IProductServiceUpdate): Promise<void>;
    checkSoldout({ product }: IProductServiceCheckSoldout): void;
    deleteProduct({ productId }: IProductServiceDelete): Promise<boolean>;
}
