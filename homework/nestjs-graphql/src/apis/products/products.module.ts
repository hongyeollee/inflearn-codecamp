import { Module } from '@nestjs/common';
import { ProductsResolver } from './products.resolver';
import { ProductsService } from './products.service';

@Module({
  imports: [],
  providers: [
    ProductsResolver, //
    ProductsService,
  ],
})
export class ProductModule {}
