import { Injectable } from '@nestjs/common';
import { Zone } from 'src/model/zone.entity';
import { GameConstants } from './../constants/game.constants';
import { Player } from './../model/player.entity';
import { GameService } from './game.service';
/**
 * Startscreen service class for the startscreen module of the game.
 *
 * @export
 * @class StartScreenService
 */
@Injectable()
export class StartScreenService {
  constructor(private gameService: GameService) {}
  /**
   * Get the game mode from the start screen.
   *
   * @return {*}  {string}
   * @memberof StartScreenService
   */
  getGreeting(): string {
    return GameConstants.GREETING_TEXST;
  }
  /**
   * Get the player name and details from the start screen.
   *
   * @return {Player}  {Player}
   * @memberof StartScreenService
   */
  getPlayerDetails(): Player {
    return new Player();
  }

  ConfirmInstructions(): Promise<boolean> {
    return new Promise((resolve) => {
      resolve(true);
    });
  }
  /**
   * Show instructions from the start screen.
   *
   * @return void
   * @memberof StartScreenService
   */
  showInstructions(): void {
    this.ConfirmInstructions() ? this.startGame() : this.deniedPopup();
  }
  /**
   * Start the game.
   *
   * @return {*}  {void}
   * @memberof StartScreenService
   */
  startGame(): Zone[] {
    return this.gameService.setAllZones();
  }
  /**
   * Show the denied popup.`
   *
   * @return {*}  {Error}
   * @memberof StartScreenService
   */
  deniedPopup(): Error {
    throw new Error(
      'Please accept the instructions to start the game. Thank you!',
    );
  }
}
