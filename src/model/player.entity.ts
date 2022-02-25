import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

/**
 * The player model
 *
 * @class Player
 */
@Entity('player')
export class Player {
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
   * Score of the player (current)
   *
   * @type {number}
   * @memberof Player
   */
  @Column({ default: 0 })
  score: number;
  /**
   * Highscore of the player (highest)
   *
   * @type {number}
   * @memberof Player
   */
  @Column({ default: 0 })
  highScore: number;
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
}
