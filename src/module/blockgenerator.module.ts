import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shape } from './../model/shape.entity';
import { BlockGeneratorService } from './../service/blockgenerator.service';

@Module({
  imports: [TypeOrmModule.forFeature([Shape])],
  providers: [BlockGeneratorService],
  controllers: [],
})
export class GameModule {}
