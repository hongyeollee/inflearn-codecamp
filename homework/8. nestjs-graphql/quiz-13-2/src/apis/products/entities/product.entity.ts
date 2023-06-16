import { Field, Int, ObjectType } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Products {
  @PrimaryGeneratedColumn('increment')
  @Field(() => Int)
  number: number;

  @Column()
  @Field(() => String)
  menu: string;

  @Column()
  @Field(() => Int)
  price: number;

  @Column()
  @Field(() => Int)
  saturated_fat: number;

  @Column()
  @Field(() => Int)
  protein: number;

  @Column()
  @Field(() => Int)
  salt: number;

  @Column()
  @Field(() => Int)
  sugar: number;

  @Column()
  @Field(() => Int)
  caffeine: number;
}
