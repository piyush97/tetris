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

  setZone(
    zoneType: string,
    height: number,
    width: number,
    backgroundColor: string,
  ): Zone {
    return new Zone(zoneType, height, width, backgroundColor);
  }
  setAllZones(): void {
    throw new Error('Method not implemented.');
  }
  setGameZone(): void {
    this.setZone(
      GameConstants.ZONES.GAME_ZONE,
      GameConstants.GAME_HEIGHT,
      GameConstants.GAME_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
}
