import { Module } from '@nestjs/common';
import { IScreen } from 'src/abstract/screen.abstract';
import { GameService } from './../service/game.service';

@Module({
  imports: [IScreen],
  providers: [GameService],
  controllers: [],
})
export class GameModule {}
