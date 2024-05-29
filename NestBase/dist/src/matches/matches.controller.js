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
exports.MatchesController = void 0;
const common_1 = require("@nestjs/common");
const common_2 = require("@nestjs/common");
const common_3 = require("@nestjs/common");
const matches_entity_1 = require("./matches.entity");
const common_4 = require("@nestjs/common");
const common_5 = require("@nestjs/common");
const common_6 = require("@nestjs/common");
const matches_service_1 = require("./matches.service");
const common_7 = require("@nestjs/common");
let MatchesController = class MatchesController {
    constructor(matchesService) {
        this.matchesService = matchesService;
    }
    findAll() {
        return this.matchesService.findAll();
    }
    findOne(id) {
        return this.matchesService.findOne(+id);
    }
    update(id, updateMatch) {
        return this.matchesService.update(+id, updateMatch);
    }
    create(createMatch) {
        return this.matchesService.create(createMatch);
    }
    remove(id) {
        return this.matchesService.remove(+id);
    }
};
exports.MatchesController = MatchesController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], MatchesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatchesController.prototype, "findOne", null);
__decorate([
    (0, common_3.Put)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __param(1, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, matches_entity_1.Match]),
    __metadata("design:returntype", void 0)
], MatchesController.prototype, "update", null);
__decorate([
    (0, common_5.Post)(),
    __param(0, (0, common_4.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [matches_entity_1.Match]),
    __metadata("design:returntype", void 0)
], MatchesController.prototype, "create", null);
__decorate([
    (0, common_6.Delete)(':id'),
    __param(0, (0, common_2.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], MatchesController.prototype, "remove", null);
exports.MatchesController = MatchesController = __decorate([
    (0, common_7.Controller)('matches'),
    __metadata("design:paramtypes", [matches_service_1.MatchesService])
], MatchesController);
//# sourceMappingURL=matches.controller.js.map