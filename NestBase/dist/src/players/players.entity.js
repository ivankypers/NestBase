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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
const swagger_1 = require("@nestjs/swagger");
const matches_entity_1 = require("../matches/matches.entity");
const trainers_entity_1 = require("../trainers/trainers.entity");
const typeorm_1 = require("typeorm");
let Player = class Player {
};
exports.Player = Player;
__decorate([
    (0, swagger_1.ApiProperty)({ example: '1', description: 'Уникальный идентификатор' }),
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Player.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    (0, swagger_1.ApiProperty)({ example: 'mleak', description: 'Никнейм' }),
    __metadata("design:type", String)
], Player.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    (0, swagger_1.ApiProperty)({ example: 'Elina', description: 'Имя' }),
    __metadata("design:type", String)
], Player.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    (0, swagger_1.ApiProperty)({ example: '4', description: 'Позиция' }),
    __metadata("design:type", Number)
], Player.prototype, "pos", void 0);
__decorate([
    (0, typeorm_1.Column)({}),
    (0, swagger_1.ApiProperty)({ example: 'Viper', description: 'Мейн герой' }),
    __metadata("design:type", String)
], Player.prototype, "main", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => matches_entity_1.Match, (matches) => matches.players),
    (0, typeorm_1.JoinTable)({
        name: 'players_matches',
        joinColumn: { name: 'player_id' },
        inverseJoinColumn: { name: 'match_id' },
    }),
    __metadata("design:type", Array)
], Player.prototype, "matches", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => trainers_entity_1.Trainer, (trainers) => trainers.players),
    (0, typeorm_1.JoinTable)({
        name: 'players_trainers',
        joinColumn: { name: 'player_id' },
        inverseJoinColumn: { name: 'trainer_id' },
    }),
    __metadata("design:type", Array)
], Player.prototype, "trainers", void 0);
exports.Player = Player = __decorate([
    (0, typeorm_1.Entity)('players')
], Player);
//# sourceMappingURL=players.entity.js.map