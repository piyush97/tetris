import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The player model
 *
 * @class Player
 */
@Entity('player')
export class Player {
  constructor(name: string) {
    this.name = name;
  }

  /**
   * Id of the player (unique)
   *
   * @type {number}
   * @memberof Player
   */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * Name of the player
   *
   * @type {string}
   * @memberof Player
   */
  @Column()
  name: string;
  /**
   * Is the player active?
   *
   * @type {boolean}
   * @memberof Player
   */
  @Column({ default: true })
  isActive: boolean;
  /**
   * Current level of the player (current) (1-10)
   *
   * @type {number}
   * @memberof Player
   */
  @Column({ default: 0 })
  currentLevel: number;

  /**
   * lines cleared by the player (current)
   *
   * @type {number}
   * @memberof Player
   */
  @Column({ default: 0 })
  lines: number;
}
