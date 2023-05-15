import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/products/buy')
  getHello(): string {
    const qqq = 3;

    const profile = {
      age: 13,
      school: '다람쥐 초등학교',
    };
    console.log(`qqq: `, qqq);
    console.log(`profile:`, profile);

    return this.appService.getHello();
  }
}
