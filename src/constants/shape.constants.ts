export class ShapeConstants {
  /**
   * Tells what type of shape is this tetramino
   *
   * @static
   * @memberof ShapeConstants
   */
  public static readonly SHAPETYPE = {
    SQUARE: 'square',
    Z: 'z-shape',
    L: 'l-shape',
    T: 't-shape',
    MIRRORED_L: 'mirrored-l-shape',
    I: 'i-shape',
  };

  static readonly HEIGHT_SQUARE = 2;
  static readonly WIDTH_SQUARE = 2;
  /**
   * Tells what side shape is falling on
   *
   * @static
   * @memberof ShapeConstants
   */
  public static readonly ROTATION_SHAPE = {
    DEGREE_0: 0,
    DEGREE_90: 90,
    DEGREE_180: 180,
    DEGREE_270: 270,
  };
  /**
   * Shape's color.
   *
   * @static
   * @memberof ShapeConstants
   */
  public static readonly SHAPE_COLOR = {
    RED: 'red',
    GREEN: 'green',
    BLUE: 'blue',
    YELLOW: 'yellow',
    PURPLE: 'purple',
    ORANGE: 'orange',
    PINK: 'pink',
    BLACK: 'black',
    WHITE: 'white',
  };
  /**
   * Color to rbg conversion.
   *
   * @static
   * @memberof ShapeConstants
   */
  public static readonly SHAPE_COLOR_RGB = {
    RED: 'rgb(255, 0, 0)',
    GREEN: 'rgb(0, 255, 0)',
    BLUE: 'rgb(0, 0, 255)',
    YELLOW: 'rgb(255, 255, 0)',
    PURPLE: 'rgb(255, 0, 255)',
    ORANGE: 'rgb(255, 165, 0)',
    PINK: 'rgb(255, 192, 203)',
    BLACK: 'rgb(0, 0, 0)',
    WHITE: 'rgb(255, 255, 255)',
  };

  /**
   * Color to Hex conversion
   *
   * @static
   * @memberof ShapeConstants
   */
  public static readonly SHAPE_COLOR_HEX = {
    RED: '#FF0000',
    GREEN: '#00FF00',
    BLUE: '#0000FF',
    YELLOW: '#FFFF00',
    PURPLE: '#FF00FF',
    ORANGE: '#FFA500',
    PINK: '#FFC0CB',
    BLACK: '#000000',
    WHITE: '#FFFFFF',
  };
}
