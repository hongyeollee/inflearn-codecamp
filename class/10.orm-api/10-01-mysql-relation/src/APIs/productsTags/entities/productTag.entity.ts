import { Product } from 'src/APIs/products/entities/product.entity';
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToMany(() => Product, (products) => products.productTags)
  products: Product[];
}

// ManyToMany를 직접만드는경우?
// 각각의 ID가 만들어지는게 아닌 추가정보(컬럼)가 필요할때, (ex- created_at, count 등.. 다른 column들)
// 예시 이미지파일 첨부 확인
