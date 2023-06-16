import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductsService } from './products.service';
import { CreateStarbucksInput } from './dto/create-starbucks.input';
import { Products } from './entities/product.entity';

//@Controller()
@Resolver()
export class ProductsResolver {
  constructor(private readonly productsService: ProductsService) {}

  //@Get()
  @Query(() => [Products], { nullable: true })
  fetchStarbucks(): Products[] {
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
