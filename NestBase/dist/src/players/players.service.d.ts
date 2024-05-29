import { Player } from './players.entity';
import { IncompletePlayerDto } from './dto/incomplete-player.dto';
import { Match } from 'src/matches/matches.entity';
import { Trainer } from 'src/trainers/trainers.entity';
import { Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/PLayerDTO';
export declare class PlayersService {
    private readonly playerRepository;
    private readonly matchRepository;
    private readonly trainerRepository;
    constructor(playerRepository: Repository<Player>, matchRepository: Repository<Match>, trainerRepository: Repository<Trainer>);
    create(playerDto: CreatePlayerDto): Promise<Player>;
    findOne(id: number): Promise<Player>;
    findAll(): Promise<Player[]>;
    findIncomplete(): Promise<IncompletePlayerDto[]>;
    update(id: number, updatedPlayer: Player): Promise<Player>;
    remove(id: number): void;
}
