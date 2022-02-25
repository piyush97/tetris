import { Injectable } from '@nestjs/common';
import { GameConstants } from './../constants/game.constants';
import { Player } from './../model/player.entity';
/**
 * Startscreen service class for the startscreen module of the game.
 *
 * @export
 * @class StartScreenService
 */
@Injectable()
export class StartScreenService {
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
  startGame(): void {
    return console.log('Start game');
  }

  deniedPopup(): Error {
    throw new Error(
      'Please accept the instructions to start the game. Thank you!',
    );
  }
}
