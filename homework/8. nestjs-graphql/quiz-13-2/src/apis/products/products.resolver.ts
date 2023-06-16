import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateStarbucksInput } from './dto/create-starbucks.input';

//@Controller()
@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  //@Get()
  @Query(() => String, { nullable: true })
  fetchStarbucks(): string {
    return this.productsService.getProducts();
  }

  @Mutation(() => String, { nullable: true })
  createStarbucks(
    @Args({ name: 'productsInput', nullable: true })
    createStarbucksInput: CreateStarbucksInput,
  ): string {
    return this.productsService.createStarbucks({ createStarbucksInput });
  }
}
