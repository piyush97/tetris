import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/model/player.entity';
import { Zone } from 'src/model/zone.entity';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { ZoneFactoryService } from 'src/service/zonefactory.service';
import { Level } from './../model/level.entity';
import { GameService } from './game.service';

@Module({
  imports: [
    GameService,
    TypeOrmModule.forFeature([Zone, Player, Level]),
    NextBlockGeneratorService,
    ZoneFactoryService,
  ],
  providers: [ZoneFactoryService],
  controllers: [],
})
export class GameZone {}
