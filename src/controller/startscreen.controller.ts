import { Controller, Get } from '@nestjs/common';
import { StartScreenService } from '../service/startscreen.service';

@Controller()
export class StartScreenController {
  constructor(private readonly startScreenService: StartScreenService) {}

  @Get('/game')
  getHello(): string {
    return this.startScreenService.getHello();
  }
}
