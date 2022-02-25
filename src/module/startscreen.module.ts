import { Module } from '@nestjs/common';
import { StartScreenService } from '../service/startscreen.service';
import { StartScreenController } from './../controller/startscreen.controller';

@Module({
  imports: [],
  providers: [StartScreenService],
  controllers: [StartScreenController],
})
export class PlayerModule {}
