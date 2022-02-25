/**
 * Zone type in screen
 *
 * @export
 * @class Zone
 */
export class Zone {
  /**
   * Creates an instance of Zone.
   * @param {string} zoneType
   * @param {number} height
   * @param {number} width
   * @memberof Zone
   */
  constructor(
    public zoneType: string,
    public height: number,
    public width: number,
    public backgroundColor: string,
  ) {
    zoneType = this.zoneType;
    height = this.height;
    width = this.width;
    backgroundColor = this.backgroundColor;
  }
}
