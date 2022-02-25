/**
 * Shape interface for block shapes in tetris.
 *
 * @export
 * @interface IShape
 */
export interface IShape {
  /**
   * The shape's identifier. This is used to identify the shape. It is also used to identify the shape in the database.
   *
   * @type {number}
   * @memberof IShape
   */
  id: number;
  /**
   * The shape's name.
   *
   * @type {string}
   * @memberof IShape
   */
  name: string;
  /**
   * The shape's color.
   *
   * @type {string}
   * @memberof IShape
   */
  color: string;
  /**
   * The shape's width (in blocks). This is the width of the shape.
   *
   * @type {number}
   * @memberof IShape
   */
  width: number;
  /**
   * The shape's height (in blocks). This is the height of the shape.
   *
   * @type {number}
   * @memberof IShape
   */
  height: number;
  /**
   * Current shape's position in x axis (in blocks).
   *
   * @type {number}
   * @memberof IShape
   */
  x: number;
  /**
   * Current shape's position in y axis (in blocks).
   *
   * @type {number}
   * @memberof IShape
   */
  y: number;
  /**
   * The shape's rotation (in degrees).
   *
   * @type {number}
   * @memberof IShape
   */
  rotation: number;
}
