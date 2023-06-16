import { ProductCategory } from 'src/APIs/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/APIs/productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from 'src/APIs/productsTags/entities/productTag.entity';
import { User } from 'src/APIs/users/entities/user.entity';
export declare class Product {
    id: string;
    name: string;
    description: string;
    price: number;
    isSoldout: boolean;
    productSaleslocation: ProductSaleslocation;
    productCategory: ProductCategory;
    user: User;
    productTags: ProductTag[];
    deletedAt: Date;
}
