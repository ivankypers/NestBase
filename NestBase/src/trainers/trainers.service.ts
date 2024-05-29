import { Injectable } from '@nestjs/common';
import { Trainer } from './trainers.entity';
import { Match } from 'src/matches/matches.entity';
import { Player } from 'src/players/players.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTrainerDto } from './dto/TrainerDTO';

@Injectable()
export class TrainersService {
  constructor(
    @InjectRepository(Player)
    private readonly playerRepository: Repository<Player>, // "внедряем" репозиторий Author в сервис
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>, // "внедряем" репозиторий Artilcle в сервис
  ) {}

  async create(trainerDto: CreateTrainerDto): Promise<Trainer> {
    //получаем объект CreateAuthorDto
    const trainer = this.trainerRepository.create(); //создаем объект Author из репозитория
    trainer.nickname = trainer.nickname;
    trainer.fullname = trainer.fullname; //заполняем поля объекта Author
    trainer.team = trainer.team;
    trainer.age = trainer.age;
    await this.trainerRepository.save(trainer); //сохраняем объект Author в БД
    return trainer; //возвращаем объект Author
  }

  findOne(id: number): Promise<Trainer> {
    // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
    return this.trainerRepository.findOne({
      //получаем объект Author по id
      where: { id }, //указываем условие поиска по id
    });
  }

  async findAll(): Promise<Trainer[]> {
    const trainers = await this.trainerRepository.find(); //получаем массив Author из БД
    return trainers; //возвращаем массив Author
  }

  async update(id: number, updatedTrainer: Trainer) {
    //получаем объект Author для обновления по id
    const trainer = await this.trainerRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
    trainer.nickname = updatedTrainer.nickname; //обновляем поля объекта Author
    trainer.fullname = updatedTrainer.fullname; //обновляем поля объекта Author
    trainer.team = updatedTrainer.team;
    trainer.age = updatedTrainer.age;
    await this.trainerRepository.save(trainer); //сохраняем объект Author в БД
    return trainer; //возвращаем объект Author
  }

  remove(id: number) {
    this.trainerRepository.delete({ id }); //удаляем объект Author из БД
  }
}
