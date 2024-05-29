import { Module } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { MatchesController } from './matches.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Match } from 'src/matches/matches.entity';
import { Player } from 'src/players/players.entity';
import { Trainer } from 'src/trainers/trainers.entity';

@Module({
  controllers: [MatchesController],
  providers: [MatchesService],
  imports: [TypeOrmModule.forFeature([Player, Match, Trainer])],
})
export class MatchesModule {}
