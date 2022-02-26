import { Injectable } from '@nestjs/common';
import { GameService } from './game.service';

@Injectable()
export class HoldZone {
  constructor(private gameservice: GameService) {}
  /**
   * Generate game Zone
   *
   * @return {*}
   * @memberof HoldZone
   */
  generateZone() {
    return this.gameservice.setHoldZone();
  }
  /**
   * On press of Hold Button
   *
   * @return {*}
   * @memberof HoldZone
   */
  onPressHold() {
    return this.onPressHold();
  }
}
