import { Trainer } from './trainers.entity';
import { Match } from 'src/matches/matches.entity';
import { Player } from 'src/players/players.entity';
import { Repository } from 'typeorm';
import { CreateTrainerDto } from './dto/TrainerDTO';
export declare class TrainersService {
    private readonly playerRepository;
    private readonly matchRepository;
    private readonly trainerRepository;
    constructor(playerRepository: Repository<Player>, matchRepository: Repository<Match>, trainerRepository: Repository<Trainer>);
    create(trainerDto: CreateTrainerDto): Promise<Trainer>;
    findOne(id: number): Promise<Trainer>;
    findAll(): Promise<Trainer[]>;
    update(id: number, updatedTrainer: Trainer): Promise<Trainer>;
    remove(id: number): void;
}
