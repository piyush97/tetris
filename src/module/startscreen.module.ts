import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/model/player.entity';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { StartScreenService } from '../service/startscreen.service';
import { StartScreenController } from './../controller/startscreen.controller';
import { GameService } from './../service/game.service';

@Module({
  imports: [
    GameService,
    TypeOrmModule.forFeature([Player]),
    NextBlockGeneratorService,
  ],
  providers: [StartScreenService],
  controllers: [StartScreenController],
})
export class PlayerModule {}
