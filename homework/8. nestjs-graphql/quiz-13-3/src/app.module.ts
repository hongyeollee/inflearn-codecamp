import { Module } from '@nestjs/common';
import { ProductModule } from './apis/products/products.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './apis/products/entities/product.entity';

@Module({
  imports: [
    ProductModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: 'src/commons/graphql/schema.gql',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'ghdfuf2',
      database: 'test',
      entities: [Products],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
