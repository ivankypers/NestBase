import { Player } from 'src/players/players.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('trainers')
export class Trainer {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  nickname: string;
  @Column()
  fullname: string;
  @Column()
  team: number;
  @Column()
  age: number;
  @ManyToMany((type) => Player, (players) => players.trainers)
  @JoinTable({
    name: 'players_trainers',
    joinColumn: { name: 'trainer_id' },
    inverseJoinColumn: { name: 'player_id' },
  })
  players: Player[];
}
