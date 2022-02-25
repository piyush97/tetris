import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IShape } from './../interface/shape.interface';
/**
 * The shape model (entity) in the database (database schema)
 *
 * @export
 * @class Shape
 * @implements {IShape}
 */
@Entity('shape')
export class Shape implements IShape {
  /**
   * The shape's identifier. This is used to identify the shape. It is also used to identify the shape in the database.
   *
   * @type {number}
   * @memberof Shape
   */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * The shape's name.
   *
   * @type {string}
   * @memberof Shape
   */
  @Column()
  name: string;
  /**
   * The shape's color.
   *
   * @type {string}
   * @memberof Shape
   */
  @Column()
  color: string;
  /**
   * The shape's width (in blocks). This is the width of the shape.
   *
   * @type {number}
   * @memberof Shape
   */
  @Column()
  width: number;
  /**
   * The shape's height (in blocks). This is the height of the shape.
   *
   * @type {number}
   * @memberof Shape
   */
  @Column()
  height: number;
  /**
   * Current shape's position in x axis (in blocks).
   *
   * @type {number}
   * @memberof Shape
   */
  @Column()
  x: number;
  /**
   * Current shape's position in y axis (in blocks).
   *
   * @type {number}
   * @memberof Shape
   */
  @Column()
  y: number;
  /**
   * The shape's rotation (in degrees).
   *
   * @type {number}
   * @memberof Shape
   */
  @Column()
  rotation: number;
}
