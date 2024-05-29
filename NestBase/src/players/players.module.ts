import { Module } from '@nestjs/common';
import { PlayersService } from './players.service';
import { PlayersController } from './players.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from 'src/matches/matches.entity';
import { Player } from './players.entity';
import { Trainer } from 'src/trainers/trainers.entity';

@Module({
  controllers: [PlayersController],
  providers: [PlayersService],
  imports: [TypeOrmModule.forFeature([Player, Match, Trainer])],
})
export class PlayersModule {}
