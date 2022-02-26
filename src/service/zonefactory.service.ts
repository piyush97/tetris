import { Injectable } from '@nestjs/common';
import { Zone } from 'src/model/zone.entity';
import { GameService } from './game.service';
/**
 * Zone Factory Service
 *
 * @export
 * @class ZoneFactoryService
 */
@Injectable()
export class ZoneFactoryService {
  constructor(private gameservice: GameService) {}
  /**
   * Generate Zone
   *
   * @return {*}
   * @memberof ZoneFactoryService
   */
  generateZones(): Zone[] {
    return this.gameservice.setAllZones();
  }
}
