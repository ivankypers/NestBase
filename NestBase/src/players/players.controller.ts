import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Player } from './players.entity';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { PlayersService } from './players.service';
import { Controller } from '@nestjs/common';
import { CreatePlayerDto } from './dto/PlayerDTO';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@Controller('players')
@ApiTags('Игроки')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Get()
  findAll() {
    return this.playersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.playersService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updatePlayer: Player) {
    return this.playersService.update(+id, updatePlayer);
  }

  @ApiOperation({ summary: 'Создание игрока' }) // Операция для Swagger
  @Post()
  create(@Body() createPlayer: CreatePlayerDto) {
    return this.playersService.create(createPlayer);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.playersService.remove(+id);
  }

  @Get('incomplete')
  findIncomplete() {
    this.playersService.findIncomplete();
  }
}
