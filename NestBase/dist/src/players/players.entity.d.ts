import { Match } from 'src/matches/matches.entity';
import { Trainer } from 'src/trainers/trainers.entity';
export declare class Player {
    id: number;
    nickname: string;
    fullname: string;
    pos: number;
    main: string;
    matches: Match[];
    trainers: Trainer[];
}
