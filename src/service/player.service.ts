import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  getHello(): string {
    return 'Hello Player!';
  }
}
