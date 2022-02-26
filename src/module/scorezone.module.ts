import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/model/player.entity';
import { Zone } from 'src/model/zone.entity';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { ScoreZone } from 'src/service/scorezone.service';
import { ZoneFactoryService } from 'src/service/zonefactory.service';
import { GameService } from './game.service';

@Module({
  imports: [
    GameService,
    TypeOrmModule.forFeature([Zone, Player]),
    NextBlockGeneratorService,
    ZoneFactoryService,
  ],
  providers: [ScoreZone],
  controllers: [],
})
export class ScoreZoneModule {}
