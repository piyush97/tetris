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
  setAllZones(): Zone[] {
    return [
      this.setGameZone(),
      this.setHoldZone(),
      this.setScoreProfileZone(),
      this.setHoldZone(),
    ];
  }
  private setGameZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.GAME_ZONE,
      GameConstants.GAME_HEIGHT,
      GameConstants.GAME_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  private setHoldZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.HOLD_BLOCK_ZONE,
      GameConstants.HOLD_ZONE_HEIGHT,
      GameConstants.HOLD_ZONE_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }

  private setScoreProfileZone(): Zone {
    return this.setZone(
      GameConstants.ZONES.SCORE_PROFILE_ZONE,
      GameConstants.SCORE_PROFILE_ZONE_HEIGHT,
      GameConstants.SCORE_PROFILE_ZONE_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  private setNextZon(): Zone {
    return this.setZone(
      GameConstants.ZONES.NEXT_BLOCK_ZONE,
      GameConstants.HOLD_ZONE_HEIGHT,
      GameConstants.HOLD_ZONE_WIDTH,
      GameConstants.GAME_BACKGROUND_COLOR,
    );
  }
  private onGameStart(): any[] {
    return this.setAllZones();
  }
}
