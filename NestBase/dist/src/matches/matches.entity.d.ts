import { Player } from 'src/players/players.entity';
export declare class Match {
    id: number;
    date: string;
    time: string;
    win: boolean;
    result: string;
    players: Player[];
}
