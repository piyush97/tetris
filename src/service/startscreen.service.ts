import { Injectable } from '@nestjs/common';

@Injectable()
export class StartScreenService {
  getHello(): string {
    return 'Hello World!';
  }
}
