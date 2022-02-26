import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlockGeneratorService } from 'src/service/blockgenerator.service';
import { NextBlockGeneratorService } from 'src/service/nextblockzone.service';
import { Shape } from './../model/shape.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Shape]), BlockGeneratorService],
  providers: [NextBlockGeneratorService],
  controllers: [],
})
export class NextBlockGeneratorModule {}
