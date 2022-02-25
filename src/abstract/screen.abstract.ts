export class IScreen {
  /**
   * Height of the screen zone in blocks
   *
   * @type {number}
   * @memberof IScreen
   */
  height: number;
  /**
   * Width of the screen zone in blocks
   *
   * @type {number}
   * @memberof IScreen
   */
  width: number;
  /**
   * The screen's background color
   *
   * @type {string}
   * @memberof IScreen
   */
  backgroundColor: string;
  /**
   * Set screen's type according to zone provided
   *
   * @param {string} zoneType
   * @memberof IScreen
   */
  setZone(zoneType: any, height: number, width: number, bgColor: string): void;
  /**
   * Setup all the zones on the game console screen
   *
   * @memberof IScreen
   */
  setAllZones(): void;
}
