import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { IHelloResponse } from './interfaces';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('hello')
  getHello(): IHelloResponse {
    return this.appService.getHello();
  }
}
