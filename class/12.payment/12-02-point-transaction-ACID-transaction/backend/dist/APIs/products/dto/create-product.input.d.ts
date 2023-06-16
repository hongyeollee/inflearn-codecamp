import { ProductSaleslocationInput } from 'src/APIs/productsSaleslocations/dto/product.saleslcation.input';
export declare class CreateProductInput {
    name: string;
    description: string;
    price: number;
    productSaleslocation: ProductSaleslocationInput;
    productCategoryId: string;
    productTags: string[];
}
