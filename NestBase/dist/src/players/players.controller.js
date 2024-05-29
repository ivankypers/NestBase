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
exports.PlayersController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const players_entity_1 = require("./players.entity");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const common_6 = require("@nestjs/common");
const players_service_1 = require("./players.service");
const common_7 = require("@nestjs/common");
const PlayerDTO_1 = require("./dto/PlayerDTO");
const swagger_1 = require("@nestjs/swagger");
let PlayersController = class PlayersController {
    constructor(playersService) {
        this.playersService = playersService;
    }
    findAll() {
        return this.playersService.findAll();
    }
    findOne(id) {
        return this.playersService.findOne(+id);
    }
    update(id, updatePlayer) {
        return this.playersService.update(+id, updatePlayer);
    }
    create(createPlayer) {
        return this.playersService.create(createPlayer);
    }
    remove(id) {
        return this.playersService.remove(+id);
    }
    findIncomplete() {
        this.playersService.findIncomplete();
    }
};
exports.PlayersController = PlayersController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findOne", null);
__decorate([
    (0, common_3.Put)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, players_entity_1.Player]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Создание игрока' }),
    (0, common_5.Post)(),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [PlayerDTO_1.CreatePlayerDto]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "create", null);
__decorate([
    (0, common_6.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "remove", null);
__decorate([
    (0, common_1.Get)('incomplete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PlayersController.prototype, "findIncomplete", null);
exports.PlayersController = PlayersController = __decorate([
    (0, common_7.Controller)('players'),
    (0, swagger_1.ApiTags)('Игроки'),
    __metadata("design:paramtypes", [players_service_1.PlayersService])
], PlayersController);
//# sourceMappingURL=players.controller.js.map