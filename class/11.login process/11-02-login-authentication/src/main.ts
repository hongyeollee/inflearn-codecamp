import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExeptionFilter } from './commons/filter/ http-exeption.filter';
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.useGlobalFilters(new HttpExeptionFilter());
  await app.listen(port, () => {
    console.log(`server listen on port ${port}👌`);
  });
}
bootstrap();
