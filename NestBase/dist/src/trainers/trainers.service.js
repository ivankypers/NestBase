"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TrainersService = void 0;
const common_1 = require("@nestjs/common");
const trainers_entity_1 = require("./trainers.entity");
const matches_entity_1 = require("../matches/matches.entity");
const players_entity_1 = require("../players/players.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let TrainersService = class TrainersService {
    constructor(playerRepository, matchRepository, trainerRepository) {
        this.playerRepository = playerRepository;
        this.matchRepository = matchRepository;
        this.trainerRepository = trainerRepository;
    }
    async create(trainerDto) {
        const trainer = this.trainerRepository.create();
        trainer.nickname = trainer.nickname;
        trainer.fullname = trainer.fullname;
        trainer.team = trainer.team;
        trainer.age = trainer.age;
        await this.trainerRepository.save(trainer);
        return trainer;
    }
    findOne(id) {
        return this.trainerRepository.findOne({
            where: { id },
        });
    }
    async findAll() {
        const trainers = await this.trainerRepository.find();
        return trainers;
    }
    async update(id, updatedTrainer) {
        const trainer = await this.trainerRepository.findOne({ where: { id } });
        trainer.nickname = updatedTrainer.nickname;
        trainer.fullname = updatedTrainer.fullname;
        trainer.team = updatedTrainer.team;
        trainer.age = updatedTrainer.age;
        await this.trainerRepository.save(trainer);
        return trainer;
    }
    remove(id) {
        this.trainerRepository.delete({ id });
    }
};
exports.TrainersService = TrainersService;
exports.TrainersService = TrainersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(players_entity_1.Player)),
    __param(1, (0, typeorm_1.InjectRepository)(matches_entity_1.Match)),
    __param(2, (0, typeorm_1.InjectRepository)(trainers_entity_1.Trainer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], TrainersService);
//# sourceMappingURL=trainers.service.js.map