import { Match } from './matches.entity';
import { MatchesService } from './matches.service';
export declare class MatchesController {
    private readonly matchesService;
    constructor(matchesService: MatchesService);
    findAll(): Promise<Match[]>;
    findOne(id: string): Promise<Match>;
    update(id: string, updateMatch: Match): Promise<Match>;
    create(createMatch: Match): Promise<Match>;
    remove(id: string): void;
}
