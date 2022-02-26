import { Injectable } from '@nestjs/common';
import { IScreen } from 'src/abstract/screen.abstract';
import { GameConstants } from 'src/constants/game.constants';
import { Zone } from 'src/model/zone.entity';
/**
 * Game service class for the game module of the game.
 *
 * @export
 * @class GameService
 * @implements {IScreen}
 */
@Injectable()
export class GameService implements IScreen {
  height: number;
  width: number;
  backgroundColor: string;
  /**
   * Set the zone.
   *
   * @param {string} zoneType
   * @param {number} height
   * @param {number} width
   * @param {string} backgroundColor
   * @return {*}  {Zone}
   * @memberof GameService
   */
  setZone(
    zoneType: string,
    height: number,
    width: number,
    backgroundColor: string,
  ): Zone {
    return new Zone(zoneType, height, width, backgroundColor);
  }
  /**
   * Set all the zones.
   *
   * @return {*}  {Zone[]}
   * @memberof GameService
   */
  setAllZones(): Zone[] {
    return [
      this.setGameZone(),
      this.setHoldZone(),
      this.setScoreProfileZone(),
      this.setNextZone(),
    ];
  }

  /**
   * Set the game zone.
   *
   * @private
   * @return {*}  {Zone}
   * @memberof GameService
   */
  private setGameZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.GAME_ZONE,
      GameConstants.GAME_HEIGHT,
      GameConstants.GAME_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  /**
   * Set the hold zone.
   *
   * @private
   * @return {*}  {Zone}
   * @memberof GameService
   */
  private setHoldZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.HOLD_BLOCK_ZONE,
      GameConstants.HOLD_ZONE_HEIGHT,
      GameConstants.HOLD_ZONE_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  /**
   * Set the score profile zone.
   *
   * @private
   * @return {*}  {Zone}
   * @memberof GameService
   */
  private setScoreProfileZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.SCORE_PROFILE_ZONE,
      GameConstants.SCORE_PROFILE_ZONE_HEIGHT,
      GameConstants.SCORE_PROFILE_ZONE_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  /**
   * Start the game.
   *
   * @private
   * @return {*}  {Zone}
   * @memberof GameService
   */
  private setNextZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.NEXT_BLOCK_ZONE,
      GameConstants.HOLD_ZONE_HEIGHT,
      GameConstants.HOLD_ZONE_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  /**
   * Start the game.
   *
   * @private
   * @return {*}  {any[]}
   * @memberof GameService
   */
  private onGameStart(): any[] {
    return this.setAllZones();
  }
}
