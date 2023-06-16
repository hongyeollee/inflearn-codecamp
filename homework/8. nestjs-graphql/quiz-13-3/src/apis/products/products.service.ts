import { Injectable } from '@nestjs/common';
import { Products } from './entities/product.entity';
import { IProductServiceCreate } from './interfaces/products-service.interface';

@Injectable()
export class ProductsService {
  getProducts(): Products[] {
    const result = [
      {
        number: 1,
        menu: '아메리카노',
        price: 4500,
        kcal: 5,
        saturated_fat: 0,
        protein: 0,
        salt: 0,
        sugar: 0,
        caffeine: 75,
      },
      {
        number: 2,
        menu: '카페라떼',
        price: 5000,
        kcal: 110,
        saturated_fat: 4,
        protein: 6,
        salt: 70,
        sugar: 8,
        caffeine: 75,
      },
    ];
    return result;
  }

  createStarbucks({ createStarbucksInput }: IProductServiceCreate): string {
    console.log({ createStarbucksInput });
    return '등록에 성공하였습니다.';
  }
}
