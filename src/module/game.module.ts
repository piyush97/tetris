import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Level } from 'src/model/level.entity';
import { Player } from 'src/model/player.entity';
import { Score } from 'src/model/score.entity';
import { Shape } from 'src/model/shape.entity';
import { Zone } from 'src/model/zone.entity';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { GameService } from './../service/game.service';

@Module({
  imports: [
    NextBlockGeneratorService,
    GameService,
    TypeOrmModule.forFeature([Player, Zone, Shape, Score, Level]),
  ],
  providers: [GameService],
  controllers: [],
})
export class GameModule {}
