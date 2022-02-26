import { Controller, Get, Query } from '@nestjs/common';
import { Player } from 'src/model/player.entity';
import { StartScreenService } from '../service/startscreen.service';

@Controller()
export class StartScreenController {
  constructor(private readonly startScreenService: StartScreenService) {}

  @Get('/player')
  private async setPlayer(@Query('name') name: string): Promise<Player> {
    return this.startScreenService.setPlayer(name);
  }
}
