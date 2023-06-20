import { InputType, PartialType } from '@nestjs/graphql';
import { CreateProductInput } from './create-product.input';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  //아래내용들을 상속받음
  //name?:string;
  //description:string;
  //price:number;
}

//PickType(CreateProductInput,['name','price'])  //뽑기
//OmitType(CreateProductInput,['description'])   //제외시키기
//PartialType(CreateProductInput)                //물음표(기입해도되고 안해도되고)
