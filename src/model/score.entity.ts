import { Column, Entity, OneToMany } from 'typeorm';
import { Player } from './player.entity';

/**
 * The score model (for the score) in the database
 *
 * @export
 * @class Score
 */
@Entity('score')
export class Score {
  /**
   * Id of the score (unique) and common with the player
   *
   * @type {number}
   * @memberof Score
   */
  @OneToMany(() => Player, (player) => player.id)
  id: number;

  /**
   * Score of the player (current)
   *
   * @type {number}
   * @memberof Score
   */
  @Column()
  score: number;

  /**
   * Highscore of the player (highest)
   *
   * @type {number}
   * @memberof Score
   */
  @Column()
  highScore: number;
}
