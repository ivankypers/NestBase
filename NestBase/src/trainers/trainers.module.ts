import { Module } from '@nestjs/common';
import { TrainersService } from './trainers.service';
import { TrainersController } from './trainers.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from 'src/matches/matches.entity';
import { Player } from 'src/players/players.entity';
import { Trainer } from 'src/trainers/trainers.entity';

@Module({
  controllers: [TrainersController],
  providers: [TrainersService],
  imports: [TypeOrmModule.forFeature([Player, Match, Trainer])],
})
export class TrainersModule {}
