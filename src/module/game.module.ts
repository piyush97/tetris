import { Module } from '@nestjs/common';
import { GameService } from './../service/game.service';

@Module({
  imports: [],
  providers: [GameService],
  controllers: [],
})
export class GameModule {}
