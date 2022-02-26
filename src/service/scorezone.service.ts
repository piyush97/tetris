import { Injectable } from '@nestjs/common';
import { Level } from './../model/level.entity';
import { GameService } from './game.service';

@Injectable()
export class ScoreZone {
  constructor(private gameservice: GameService, private level: Level) {}
  /**
   * Generate score profile Zone
   *
   * @return {*}
   * @memberof ScoreZone
   */
  generateZone() {
    return this.gameservice.setScoreProfileZone();
  }
  /**
   * Show Details of Player's profile
   *
   * @return {*}
   * @memberof ScoreZone
   */
  showDetails() {
    return this.showDetails();
  }
  /**
   * Shows the current level of the player
   *
   * @return {*}
   * @memberof ScoreZone
   */
  showLevel() {
    this.level;
    return this.showLevel();
  }
}
