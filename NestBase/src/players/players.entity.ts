import { ApiProperty } from '@nestjs/swagger';
import { Match } from 'src/matches/matches.entity';
import { Trainer } from 'src/trainers/trainers.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('players')
export class Player {
  @ApiProperty({ example: '1', description: 'Уникальный идентификатор' })
  @PrimaryGeneratedColumn()
  id: number;
  @Column({})
  @ApiProperty({ example: 'OBLA', description: 'Никнейм' })
  nickname: string;
  @Column({})
  @ApiProperty({ example: 'Ivan', description: 'Имя' })
  fullname: string;
  @Column({})
  @ApiProperty({ example: '4', description: 'Позиция' })
  pos: number;
  @Column({})
  @ApiProperty({ example: 'ZXC', description: 'По жизни' })
  main: string;
  @ManyToMany((type) => Match, (matches) => matches.players)
  @JoinTable({
    //join таблица с названием author_article
    name: 'players_matches',
    joinColumn: { name: 'player_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'match_id' }, //для связи с идентификатором статьи
  })
  matches: Match[];
  @ManyToMany((type) => Trainer, (trainers) => trainers.players)
  @JoinTable({
    //join таблица с названием author_article
    name: 'players_trainers',
    joinColumn: { name: 'player_id' }, //для связи с идентификатором автора
    inverseJoinColumn: { name: 'trainer_id' }, //для связи с идентификатором статьи
  })
  trainers: Trainer[];
}
