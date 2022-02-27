import { Controller, Get, Query } from '@nestjs/common';
import { Player } from 'src/model/player.entity';
import { StartScreenService } from '../service/startscreen.service';
/**
 * StartScreenController is the controller for the start screen.
 *
 * @export
 * @class StartScreenController
 */
@Controller()
export class StartScreenController {
  constructor(private readonly startScreenService: StartScreenService) {}

  /**
   * Set the player details
   *
   * @private
   * @param {string} name
   * @return {*}  {Promise<Player>}
   * @memberof StartScreenController
   */
  @Get('/player')
  private async setPlayer(@Query('name') name: string): Promise<Player> {
    return this.startScreenService.setPlayer(name);
  }
}
