import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { ProductCategory } from './entities/productCategory.entity';
import { ProductsCategoriesService } from './productsCategories.service';

@Resolver()
export class ProductsCategoriesResolver {
  constructor(
    private readonly productCategoriesService: ProductsCategoriesService,
  ) {}

  @Mutation(() => ProductCategory, { nullable: true })
  createProductCategory(
    @Args('name') name: string, //
  ): Promise<ProductCategory> {
    return this.productCategoriesService.create({ name });
  }
}
