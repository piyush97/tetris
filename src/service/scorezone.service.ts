import { Injectable } from '@nestjs/common';
import { GameService } from './game.service';

@Injectable()
export class ScoreZone {
  constructor(private gameservice: GameService) {}
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
}
