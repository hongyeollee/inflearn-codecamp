import { Module } from '@nestjs/common';
import { BoardsModule } from './APIs/boards/boardsModule';
// import { ProductsModule } from './APIs/products/productsModule';
// import { UsersModule } from './APIs/users/usersModule';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    BoardsModule,
    // ProductsModule,
    // UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
  ],
})
export class AppModule {}
