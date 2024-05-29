import { Player } from './players.entity';
import { PlayersService } from './players.service';
import { CreatePlayerDto } from './dto/PlayerDTO';
export declare class PlayersController {
    private readonly playersService;
    constructor(playersService: PlayersService);
    findAll(): Promise<Player[]>;
    findOne(id: string): Promise<Player>;
    update(id: string, updatePlayer: Player): Promise<Player>;
    create(createPlayer: CreatePlayerDto): Promise<Player>;
    remove(id: string): void;
    findIncomplete(): void;
}
