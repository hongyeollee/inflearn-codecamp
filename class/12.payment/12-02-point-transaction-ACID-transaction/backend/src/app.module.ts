import { Module } from '@nestjs/common';
import { BoardsModule } from './APIs/boards/boardsModule';
import { ProductsModule } from './APIs/products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsCategoriesModule } from './APIs/productsCategories/productsCategories.module';
import { UsersModule } from './APIs/users/users.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './APIs/auth/auth.module';
import { PointsTransactionsModule } from './APIs/pointsTransactions/pointsTransactions.module';

@Module({
  imports: [
    AuthModule,
    BoardsModule,
    PointsTransactionsModule,
    ProductsModule,
    ProductsCategoriesModule,
    UsersModule,
    ConfigModule.forRoot(),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
      context: ({ req, res }) => ({ req, res }), //req는 기본적으로 들어오지만 res 작성해야만 들어옴
    }),
    TypeOrmModule.forRoot({
      type: process.env.DB_TYPE as 'mysql',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [__dirname + '/APIs/**/*.entity.*'],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
