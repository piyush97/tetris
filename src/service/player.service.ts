import { Injectable } from '@nestjs/common';

@Injectable()
export class PlayerService {
  private healthCheck(): string {
    return 'tetris!';
  }
}
