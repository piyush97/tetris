import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Level } from './level.entity';
/**
 * The music model
 *
 * @export
 * @class Music
 */
@Entity('music')
export class Music {
  /**
   * Id of the music (unique)
   *
   * @type {number}
   * @memberof Music
   */
  @PrimaryGeneratedColumn()
  id: number;
  /**
   * Name of the music
   *
   * @type {string}
   * @memberof Music
   */
  @Column()
  name: string;
  /**
   * Path of the music
   *
   * @type {string}
   * @memberof Music
   */
  @Column()
  fileName: string;
  /**
   * Music's artist
   *
   * @type {string}
   * @memberof Music
   */
  @Column()
  artist: string;
  /**
   * Music's stress level (1-10)
   *
   * @type {number}
   * @memberof Music
   */
  @OneToOne(() => Level, (Level) => Level.number)
  stressLevel: number;
}
