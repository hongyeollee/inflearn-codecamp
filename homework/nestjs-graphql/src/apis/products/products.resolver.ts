import { Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';

//@Controller()
@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  //@Get()
  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.productsService.getProducts();
  }
}
