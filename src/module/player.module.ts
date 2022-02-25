import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Player } from '../model/player.entity';
import { PlayerService } from '../service/player.service';

@Module({
  imports: [TypeOrmModule.forFeature([Player])],
  providers: [PlayerService],
  controllers: [],
})
export class PlayerModule {}
