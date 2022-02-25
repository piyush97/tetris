import { Controller, Get } from '@nestjs/common';
import { StartScreenService } from '../service/startscreen.service';

@Controller()
export class AppController {
  constructor(private readonly appService: StartScreenService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
