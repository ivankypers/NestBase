import { Injectable } from '@nestjs/common';
import { Match } from './matches.entity';
import { Player } from 'src/players/players.entity';
import { Trainer } from 'src/trainers/trainers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMatchDto } from './dto/MatchDTO';

@Injectable()
export class MatchesService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>, // "внедряем" репозиторий Author в сервис
    @InjectRepository(Player)
    private readonly matchRepository: Repository<Match>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Match)
    private readonly trainerRepository: Repository<Trainer>, // "внедряем" репозиторий Artilcle в сервис
  ) {}
  async create(matchDto: CreateMatchDto): Promise<Match> {
    //получаем объект CreateAuthorDto
    const match = this.matchRepository.create(); //создаем объект Author из репозитория
    match.date = match.date;
    match.time = match.time; //заполняем поля объекта Author
    match.win = match.win;
    match.result = match.result;
    await this.matchRepository.save(match); //сохраняем объект Author в БД
    return match; //возвращаем объект Author
  }

  findOne(id: number): Promise<Match> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.matchRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
    });
  }

  async findAll(): Promise<Match[]> {
    const matches = await this.matchRepository.find(); //получаем массив Author из БД
    return matches; //возвращаем массив Author
  }

  async update(id: number, updatedMatch: Match) {
    //получаем объект Author для обновления по id
    const match = await this.matchRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
    match.date = updatedMatch.date; //обновляем поля объекта Author
    match.time = updatedMatch.time; //обновляем поля объекта Author
    match.time = updatedMatch.time;
    match.win = updatedMatch.win;
    match.result = updatedMatch.result;
    await this.matchRepository.save(match); //сохраняем объект Author в БД
    return match; //возвращаем объект Author
  }

  remove(id: number) {
    this.matchRepository.delete({ id }); //удаляем объект Author из БД
  }
}
