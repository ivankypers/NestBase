import { Player } from 'src/players/players.entity';
import {
    Column,
    Entity,
    JoinTable,
    ManyToMany,
    PrimaryGeneratedColumn,
  } from 'typeorm';
  
@Entity('matches')
export class Match {
    @PrimaryGeneratedColumn()
    id: number;
    @Column()
    date: string;
    @Column()
    time: string;
    @Column()
    win: boolean;
    @Column()
    result: string;
    @ManyToMany((type) => Player, (players) => players.matches)
    @JoinTable({
      name: 'players_matches',
      joinColumn: { name: 'match_id' },
      inverseJoinColumn: { name: 'player_id' },
    })
    players: Player[];
}