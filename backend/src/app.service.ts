import { IHelloResponse } from './interfaces';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private response = 'General Kenobi!';

  getHello(): IHelloResponse {
    return { message: this.response };
  }
}
