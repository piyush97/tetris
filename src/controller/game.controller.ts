import { Controller, Get } from '@nestjs/common';
import { GameService } from 'src/service/game.service';
/**
 * GameController is the controller for the game.
 *
 * @export
 * @class GameController
 */
@Controller()
export class GameController {
  constructor(private readonly gameservice: GameService) {}
  /**
   * Rotate the tetramino
   *
   * @private
   * @return {*}  {void}
   * @memberof GameController
   */
  @Get('/rotate')
  private rotate(): void {
    return this.gameservice.rotate();
  }
  /**
   * Hold the tetramino
   *
   * @private
   * @return {*}  {void}
   * @memberof GameController
   */
  @Get('/hold')
  private hold(): void {
    return this.gameservice.hold();
  }
  /**
   * Move the tetramino
   *
   * @private
   * @return {*}  {void}
   * @memberof GameController
   */
  @Get('/move')
  private move(): void {
    return this.gameservice.move();
  }
}
