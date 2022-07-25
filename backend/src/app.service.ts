import { Injectable } from '@nestjs/common';
import { IHelloResponse } from './interfaces';

@Injectable()
export class AppService {
  getHello(): IHelloResponse {
    return { message: 'General Kenobi!' };
  }
}
