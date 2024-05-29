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
exports.Trainer = void 0;
const players_entity_1 = require("../players/players.entity");
const typeorm_1 = require("typeorm");
let Trainer = class Trainer {
};
exports.Trainer = Trainer;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Trainer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Trainer.prototype, "nickname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Trainer.prototype, "fullname", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Trainer.prototype, "team", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Trainer.prototype, "age", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)((type) => players_entity_1.Player, (players) => players.trainers),
    (0, typeorm_1.JoinTable)({
        name: 'players_trainers',
        joinColumn: { name: 'trainer_id' },
        inverseJoinColumn: { name: 'player_id' },
    }),
    __metadata("design:type", Array)
], Trainer.prototype, "players", void 0);
exports.Trainer = Trainer = __decorate([
    (0, typeorm_1.Entity)('trainers')
], Trainer);
//# sourceMappingURL=trainers.entity.js.map