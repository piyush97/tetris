import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GameConstants } from './../constants/game.constants';
import { Player } from './../model/player.entity';
import { BlockGeneratorService } from './blockgenerator.service';
import { GameService } from './game.service';
/**
 * Startscreen service class for the startscreen module of the game.
 *
 * @export
 * @class StartScreenService
 */
@Injectable()
export class StartScreenService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    private gameService: GameService,
    private blockGeneratorService: BlockGeneratorService,
  ) {}
  /**
   * Get the game mode from the start screen.
   *
   * @return {*}  {string}
   * @memberof StartScreenService
   */
  private getGreeting(): string {
    return GameConstants.GREETING_TEXST;
  }

  /**
   * Set the player details.
   *
   * @private
   * @param {string} name
   * @return {*}  {Promise<Player>}
   * @memberof StartScreenService
   */
  async setPlayer(name: string): Promise<Player> {
    const user = this.playerRepository.create(Player);
    await this.playerRepository.save(name);
    this.startGame();
    return user;
  }

  private ConfirmInstructions(): Promise<boolean> {
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
  private showInstructions(): void {
    this.ConfirmInstructions() ? this.startGame() : this.deniedPopup();
  }
  /**
   * Start the game.
   *
   * @return {*}  {void}
   * @memberof StartScreenService
   */
  private startGame(): void {
    this.gameService.setAllZones();
    this.blockGeneratorService.startRolling();
  }
  /**
   * Show the denied popup.`
   *
   * @return {*}  {Error}
   * @memberof StartScreenService
   */
  private deniedPopup(): Error {
    throw new Error(
      'Please accept the instructions to start the game. Thank you!',
    );
  }
}
