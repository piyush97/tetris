/**
 * Game Constants (Constants for the game)
 *
 * @export
 * @class GameConstants
 */
export class GameConstants {
  /**
   * The width of the game screen (in blocks)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly GAME_WIDTH = 10;
  /**
   * The height of the screen (in blocks)
   * @static
   * @memberof GameConstants
   * @type {number}
   */
  public static readonly GAME_HEIGHT = 20;
  /**
   * The number of rows each blocks takes up (in blocks per second)
   *
   * @static
   * @memberof GameConstants
   * @type {number}
   */
  public static readonly GAME_SPEED = 1000;
  /**
   * Speed increase factor (in blocks per second)
   *
   * @static
   * @memberof GameConstants
   * @type {number}
   */
  public static readonly GAME_SPEED_INCREASE = 100;
  /**
   * Speed decrease factor (in blocks per second)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly GAME_SPEED_DECREASE = 100;
  /**
   * Minimum speed (in blocks per second)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly GAME_SPEED_MIN = 100;
  public static readonly GAME_SPEED_MAX = 1000;
  public static readonly GAME_SPEED_DEFAULT = 500;
  public static readonly GAME_SPEED_SLOW = 100;
  public static readonly GAME_SPEED_FAST = 1000;
  public static readonly GAME_SPEED_VERY_FAST = 2000;
  public static readonly GAME_SPEED_VERY_SLOW = 50;
  public static readonly GAME_SPEED_SLOWEST = 10;
  public static readonly GAME_SPEED_FASTEST = 1000;
  public static readonly GAME_SPEED_SLOWEST_STRING = 'slowest';
  public static readonly GAME_SPEED_SLOW_STRING = 'slow';
  public static readonly GAME_SPEED_FAST_STRING = 'fast';
  public static readonly GAME_SPEED_FASTEST_STRING = 'fastest';
  public static readonly GAME_SPEED_DEFAULT_STRING = 'default';
  public static readonly GAME_SPEED_VERY_SLOW_STRING = 'very slow';
  public static readonly GAME_SPEED_VERY_FAST_STRING = 'very fast';
  /**
   * State of the game (running, paused, stopped)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly enumGameState = {
    GAME_STATE_START: 'start',
    GAME_STATE_PLAY: 'play',
    GAME_STATE_PAUSE: 'pause',
    GAME_STATE_END: 'end',
  };
  /**
   * Zones (Screen zones in the game screen)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly ZONES = {
    GAME_ZONE: 'game-zone',
    NEXT_BLOCK_ZONE: 'next-block-zone',
    SCORE_PROFILE_ZONE: 'score-profile-zone',
    HOLD_BLOCK_ZONE: 'hold-block-zone',
  };
  /**
   * Font style (font-family) for the game
   *
   * @static
   * @memberof GameConstants
   */
  public static font = {
    font: '16px Arial',
    fill: '#ffffff',
    align: 'center',
  };
  /**
   * HOLD KEY (key code) input pressed
   *
   * @static
   * @memberof GameConstants
   */
  public static HOLD_KEY = 'H';

  /**
   * Music volume (0-1) (default: 0.5)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly MUSIC_VOLUME = 0.5;
  /**
   * Sound volume (0-1) (default: 0.5)
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly SOUND_VOLUME = 0.5;

  /**
   * Points needed to enter next level
   *
   * @static
   * @memberof GameConstants
   */
  public static readonly POINTS_FOR_LEVEL_CHANGE = 1000;
}
