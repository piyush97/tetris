import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The level model
 *
 * @export
 * @class Level
 */
@Entity('level')
export class Level {
  /**
   * Id of the level (unique)
   *
   * @type {number}
   * @memberof Level
   */
  @PrimaryGeneratedColumn()
  private id: number;

  /**
   * Level of the player (current)
   *
   * @type {number}
   * @memberof Level
   */
  @Column()
  number: number;
}
