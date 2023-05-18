import { Module } from '@nestjs/common';
import { BoardsModule } from './APIs/boards/boardsModule';
// import { ProductsModule } from './APIs/products/productsModule';
// import { UsersModule } from './APIs/users/usersModule';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Board } from './APIs/boards/entities/boardEntity';

@Module({
  imports: [
    BoardsModule,
    // ProductsModule,
    // UsersModule,
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
      database: 'inflearn',
      entities: [Board],
      synchronize: true,
      logging: true,
    }),
  ],
})
export class AppModule {}
