import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Trainer } from './trainers.entity';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { Controller } from '@nestjs/common';

@Controller('trainers')
export class TrainersController {
  constructor(private readonly trainersService: TrainersService) {}

  @Get()
  findAll() {
    return this.trainersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.trainersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateTrainer: Trainer) {
    return this.trainersService.update(+id, updateTrainer);
  }

  @Post()
  create(@Body() createTrainer: Trainer) {
    return this.trainersService.create(createTrainer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.trainersService.remove(+id);
  }
}
