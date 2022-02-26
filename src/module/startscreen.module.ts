import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from 'src/model/player.entity';
import { StartScreenService } from '../service/startscreen.service';
import { StartScreenController } from './../controller/startscreen.controller';
import { GameService } from './../service/game.service';

@Module({
  imports: [GameService, TypeOrmModule.forFeature([Player])],
  providers: [StartScreenService],
  controllers: [StartScreenController],
})
export class PlayerModule {}
