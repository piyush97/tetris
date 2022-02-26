import { Injectable } from '@nestjs/common';
import { GameService } from './game.service';
/**
 * GameZoneService
 *
 * @export
 * @class GameZone
 */
@Injectable()
export class GameZone {
  constructor(private gameservice: GameService) {}
  /**
   * Generate game Zone
   *
   * @return {*}
   * @memberof GameZone
   */
  generateZone() {
    return this.gameservice.setGameZone();
  }
}
