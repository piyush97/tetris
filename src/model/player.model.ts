/**
 * The player model
 *
 * @class Player
 */
export class Player {
  /**
   * Creates an instance of Player. This is the constructor.
   * @param {number} id
   * @param {string} name
   * @param {number} score
   * @param {number} highScore
   * @param {boolean} isActive
   * @param {number} currentLevel
   * @memberof Player
   */
  constructor(
    id: number,
    name: string,
    score: number,
    highScore: number,
    isActive: boolean,
    currentLevel: number,
  ) {
    this.id = id;
    this.name = name;
    this.score = score;
    this.highScore = highScore;
    this.isActive = isActive;
    this.currentLevel = currentLevel;
  }
  /**
   * Id of the player (unique)
   *
   * @type {number}
   * @memberof Player
   */
  id: number;
  /**
   * Name of the player
   *
   * @type {string}
   * @memberof Player
   */
  name: string;
  /**
   * Score of the player (current)
   *
   * @type {number}
   * @memberof Player
   */
  score: number;
  /**
   * Highscore of the player (highest)
   *
   * @type {number}
   * @memberof Player
   */
  highScore: number;
  /**
   * Is the player active?
   *
   * @type {boolean}
   * @memberof Player
   */
  isActive: boolean;
  /**
   * Current level of the player (current) (1-10)
   *
   * @type {number}
   * @memberof Player
   */
  currentLevel: number;
}
