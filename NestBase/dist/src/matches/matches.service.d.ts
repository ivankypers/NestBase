import { Match } from './matches.entity';
import { Player } from 'src/players/players.entity';
import { Trainer } from 'src/trainers/trainers.entity';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/MatchDTO';
export declare class MatchesService {
    private readonly playerRepository;
    private readonly matchRepository;
    private readonly trainerRepository;
    constructor(playerRepository: Repository<Player>, matchRepository: Repository<Match>, trainerRepository: Repository<Trainer>);
    create(matchDto: CreateMatchDto): Promise<Match>;
    findOne(id: number): Promise<Match>;
    findAll(): Promise<Match[]>;
    update(id: number, updatedMatch: Match): Promise<Match>;
    remove(id: number): void;
}
