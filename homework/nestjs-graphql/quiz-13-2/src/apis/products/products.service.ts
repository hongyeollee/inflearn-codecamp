import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getProducts(): string {
    return '스타벅스 커피 목록을 조회합니다.';
  }

  createStarbucks({ createStarbucksInput }): string {
    console.log({ createStarbucksInput });
    return '등록에 성공하였습니다.';
  }
}
