import { Module } from '@nestjs/common';
import { BoardsModule } from './APIs/boards/boardsModule';
import { ProductsModule } from './APIs/products/products.module';
// import { UsersModule } from './APIs/users/usersModule';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategoriesModule } from './APIs/productsCategories/productsCategories.module';

@Module({
  imports: [
    BoardsModule,
    ProductsModule,
    ProductsCategoriesModule,
    // UsersModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql', //process.env.DB_TYPE as 'mysql',
      host: 'localhost', //process.env.DB_HOST,
      port: 3306, //Number(process.env.DB_PORT),
      username: 'root', //process.env.DB_USERNAME,
      password: 'ghdfuf2', //process.env.DB_PASSWORD,
      database: 'inflearn', //process.env.DB_DATABASE, //
      entities: [__dirname + '/APIs/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
