import { Module } from '@nestjs/common';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { GameService } from './../service/game.service';

@Module({
  imports: [NextBlockGeneratorService],
  providers: [GameService],
  controllers: [],
})
export class GameModule {}
