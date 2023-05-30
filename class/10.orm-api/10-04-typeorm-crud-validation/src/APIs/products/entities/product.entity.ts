import { Field, Int, ObjectType } from '@nestjs/graphql';
import { ProductCategory } from 'src/APIs/productsCategories/entities/productCategory.entity';
import { ProductSaleslocation } from 'src/APIs/productsSaleslocations/entities/productSaleslocation.entity';
import { ProductTag } from 'src/APIs/productsTags/entities/productTag.entity';
import { User } from 'src/APIs/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  id: string;

  @Column()
  @Field(() => String)
  name: string;

  @Column()
  @Field(() => String)
  description: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column({ default: false })
  @Field(() => Boolean)
  isSoldout: boolean;

  @JoinColumn() // ->JoinColumn은 OneToOne에 대해서만 기입하면 됨(1:1 관계에서만 중심을 무엇으로 잡은것인지를 의미함)
  @OneToOne(() => ProductSaleslocation) // -> 1:1 column을 join하고 ProductSaleslocation table과 연결할거야. 라는 뜻
  @Field(() => ProductSaleslocation)
  productSaleslocation: ProductSaleslocation; // -> 이때 productSaleslocation 이라는 column을 사용할것이고, ProductSaleslocation(interface) type을 사용할거야 라는 의미

  @ManyToOne(() => ProductCategory)
  @Field(() => ProductCategory)
  productCategory: ProductCategory;

  @ManyToOne(() => User)
  @Field(() => User)
  user: User;

  @JoinTable() //->JoinTable을 쓰면 자동으로 중간테이블이 만들어진다.
  @ManyToMany(() => ProductTag, (productTags) => productTags.products)
  @Field(() => [ProductTag])
  prodctTags: ProductTag[];
}
