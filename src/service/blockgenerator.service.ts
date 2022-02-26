import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GameConstants } from 'src/constants/game.constants';
import { Shape } from 'src/model/shape.entity';
import { Repository } from 'typeorm';
import { ShapeConstants } from './../constants/shape.constants';
@Injectable()
export class BlockGeneratorService {
  constructor(
    @InjectRepository(Shape)
    private shapeRepository: Repository<Shape>,
  ) {}
  async generateBlocks(): Promise<Shape> {
    console.log('Generating Random blocks');
    const block = this.shapeRepository.create(
      new Shape(
        ShapeConstants.SHAPETYPE.SQUARE,
        ShapeConstants.SHAPE_COLOR.BLUE,
        ShapeConstants.HEIGHT_SQUARE,
        ShapeConstants.WIDTH_SQUARE,
        0,
        0,
      ),
    );
    await this.shapeRepository.save(block);

    return block;
  }

  getCurrentGameState() {
    return GameConstants.enumGameState.GAME_STATE_PLAY;
  }
  startRolling() {
    if (
      GameConstants.enumGameState.GAME_STATE_PLAY === this.getCurrentGameState()
    ) {
      this.generateBlocks();
    } else if (GameConstants.enumGameState.GAME_STATE_PAUSE) {
      console.log('Game is paused');
    } else if (
      GameConstants.enumGameState.GAME_STATE_END === this.getCurrentGameState()
    ) {
      console.log('Game Over');
    }
  }
}
