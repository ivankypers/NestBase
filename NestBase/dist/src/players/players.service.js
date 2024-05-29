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
exports.PlayersService = void 0;
const common_1 = require("@nestjs/common");
const players_entity_1 = require("./players.entity");
const incomplete_player_dto_1 = require("./dto/incomplete-player.dto");
const matches_entity_1 = require("../matches/matches.entity");
const trainers_entity_1 = require("../trainers/trainers.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let PlayersService = class PlayersService {
    constructor(playerRepository, matchRepository, trainerRepository) {
        this.playerRepository = playerRepository;
        this.matchRepository = matchRepository;
        this.trainerRepository = trainerRepository;
    }
    async create(playerDto) {
        const player = this.playerRepository.create();
        player.nickname = playerDto.nickname;
        player.fullname = playerDto.fullname;
        player.pos = playerDto.pos;
        player.main = playerDto.main;
        const matches = await this.matchRepository.findBy({
            id: (0, typeorm_2.In)(playerDto.matches),
        });
        player.matches = matches;
        await this.playerRepository.save(player);
        return player;
    }
    findOne(id) {
        return this.playerRepository.findOne({
            where: { id },
            relations: { matches: true, trainers: true },
        });
    }
    async findAll() {
        const players = await this.playerRepository.find({
            relations: {
                matches: true,
                trainers: true,
            },
        });
        return players;
    }
    async findIncomplete() {
        const players = await this.playerRepository.find();
        const incompletePlayers = players.map((player) => {
            const incompletePlayer = new incomplete_player_dto_1.IncompletePlayerDto();
            incompletePlayer.id = player.id;
            incompletePlayer.pos = player.pos;
            return incompletePlayer;
        });
        return incompletePlayers;
    }
    async update(id, updatedPlayer) {
        const player = await this.playerRepository.findOne({ where: { id } });
        player.nickname = updatedPlayer.nickname;
        player.fullname = updatedPlayer.fullname;
        player.pos = updatedPlayer.pos;
        player.main = updatedPlayer.main;
        player.matches = updatedPlayer.matches;
        player.trainers = updatedPlayer.trainers;
        await this.playerRepository.save(player);
        return player;
    }
    remove(id) {
        this.playerRepository.delete({ id });
    }
};
exports.PlayersService = PlayersService;
exports.PlayersService = PlayersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(players_entity_1.Player)),
    __param(1, (0, typeorm_1.InjectRepository)(matches_entity_1.Match)),
    __param(2, (0, typeorm_1.InjectRepository)(trainers_entity_1.Trainer)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository])
], PlayersService);
//# sourceMappingURL=players.service.js.map