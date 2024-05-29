import { Get } from '@nestjs/common';
import { Param } from '@nestjs/common';
import { Put } from '@nestjs/common';
import { Match } from './matches.entity';
import { Body } from '@nestjs/common';
import { Post } from '@nestjs/common';
import { Delete } from '@nestjs/common';
import { MatchesService } from './matches.service';
import { Controller} from '@nestjs/common';


@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get()
  findAll() {
      return this.matchesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.matchesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateMatch: Match) {
    return this.matchesService.update(+id, updateMatch);
  }

  @Post()
  create(@Body() createMatch: Match) {
    return this.matchesService.create(createMatch);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.matchesService.remove(+id);
  }
}

