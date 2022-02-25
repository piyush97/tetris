import { Module } from '@nestjs/common';
import { StartScreenService } from '../service/startscreen.service';
import { StartScreenController } from './../controller/startscreen.controller';
import { GameService } from './../service/game.service';

@Module({
  imports: [GameService],
  providers: [StartScreenService],
  controllers: [StartScreenController],
})
export class PlayerModule {}
