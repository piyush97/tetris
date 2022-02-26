import { Injectable } from '@nestjs/common';
import { Score } from './../model/score.entity';
import { GameService } from './game.service';
/**
 * GameZoneService
 *
 * @export
 * @class GameZone
 */
@Injectable()
export class GameZone {
  constructor(private gameservice: GameService, private score: Score) {}
  /**
   * Generate game Zone
   *
   * @return {*}
   * @memberof GameZone
   */
  generateZone() {
    return this.gameservice.setGameZone();
  }
  /**
   * Falling Block
   *
   * @return {*}
   * @memberof GameZone
   */
  fallingBlock() {
    return this.fallingBlock();
  }
  /**
   * Collison Detection for falling block and increases the score
   *
   * @return {*}
   * @memberof GameZone
   */
  collision() {
    return this.collision();
  }
  /**
   * Score increments
   *
   * @memberof GameZone
   */
  scoreIncrement() {
    this.scoreIncrement();
  }
}
