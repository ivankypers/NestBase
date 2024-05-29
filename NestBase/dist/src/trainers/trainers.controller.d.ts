import { Trainer } from './trainers.entity';
import { TrainersService } from './trainers.service';
export declare class TrainersController {
    private readonly trainersService;
    constructor(trainersService: TrainersService);
    findAll(): Promise<Trainer[]>;
    findOne(id: string): Promise<Trainer>;
    update(id: string, updateTrainer: Trainer): Promise<Trainer>;
    create(createTrainer: Trainer): Promise<Trainer>;
    remove(id: string): void;
}
