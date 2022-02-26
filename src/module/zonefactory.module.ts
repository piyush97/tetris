import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/model/player.entity';
import { Zone } from 'src/model/zone.entity';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { ZoneFactoryService } from 'src/service/zonefactory.service';
import { GameService } from './../service/game.service';

@Module({
  imports: [
    GameService,
    TypeOrmModule.forFeature([Zone, Player]),
    NextBlockGeneratorService,
  ],
  providers: [ZoneFactoryService],
  controllers: [],
})
export class ZonefactoryModule {}
