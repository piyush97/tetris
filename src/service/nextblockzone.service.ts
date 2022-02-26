import { Injectable } from '@nestjs/common';
import { Shape } from 'src/model/shape.entity';
import { BlockGeneratorService } from './blockgenerator.service';

/**
 * Generates the next block for the game module
 *
 * @export
 * @class NextBlockGeneratorService
 */
@Injectable()
export class NextBlockGeneratorService {
  /**
   * Creates an instance of NextBlockGeneratorService.
   * @param {BlockGeneratorService} blockGeneratorService
   * @memberof NextBlockGeneratorService
   */
  constructor(private blockGeneratorService: BlockGeneratorService) {}
  /**
   * Generates the stack which shows the next block
   *
   * @return {*}
   * @memberof NextBlockGeneratorService
   */
  async generateStack() {
    const stack: Shape[] = [];
    stack.push(await this.blockGeneratorService.generateBlocks());
    return stack;
  }
}
