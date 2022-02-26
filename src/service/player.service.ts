import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  private getHello(): string {
    return 'Hello Player!';
  }
}
