import { Injectable } from '@nestjs/common';
import { Player } from './players.entity';
import { IncompletePlayerDto } from './dto/incomplete-player.dto';
import { Match } from 'src/matches/matches.entity';
import { Trainer } from 'src/trainers/trainers.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { In, Repository } from 'typeorm';
import { CreatePlayerDto } from './dto/PLayerDTO';

@Injectable()
export class PlayersService {

    constructor(@InjectRepository(Player)
    private readonly playerRepository: Repository<Player>, // "внедряем" репозиторий Author в сервис
    @InjectRepository(Match)
    private readonly matchRepository: Repository<Match>, // "внедряем" репозиторий Affiliation в сервис
    @InjectRepository(Trainer)
    private readonly trainerRepository: Repository<Trainer>, // "внедряем" репозиторий Artilcle в сервис
) {}

async create(playerDto: CreatePlayerDto): Promise<Player>
{
   //получаем объект CreateAuthorDto
   const player = this.playerRepository.create(); //создаем объект Author из репозитория
   player.nickname = playerDto.nickname;
   player.fullname = playerDto.fullname; //заполняем поля объекта Author
   player.pos = playerDto.pos;
   player.main = playerDto.main;
   const matches = await this.matchRepository.findBy({
     //получаем массив Affiliation по id
     id: In(playerDto.matches),
   });
   player.matches = matches;
   await this.playerRepository.save(player); //сохраняем объект Author в БД
   return player; //возвращаем объект Author
 }


    findOne(id: number): Promise<Player> {
      // Promise<Author> - указывает, что функция возвращает объект Author в виде Promise (c асинхронного потока)
      return this.playerRepository.findOne({
        //получаем объект Author по id
        where: { id }, //указываем условие поиска по id
        relations: { matches: true, trainers: true }, //получаем связанные объекты
      });
    }

    async findAll(): Promise<Player[]> {
      const players = await this.playerRepository.find({
        //получаем связанные объекты
        relations: {
          matches: true,
          trainers: true,
        },
      }); //получаем массив Author из БД
      return players; //возвращаем массив Author
    }
  
    async findIncomplete(): Promise<IncompletePlayerDto[]> {
      const players = await this.playerRepository.find(); //получаем массив Author из БД
      const incompletePlayers: IncompletePlayerDto[] = players.map((player) => {
        //преобразуем массив Author в массив IncompleteAuthorDto
        const incompletePlayer = new IncompletePlayerDto();
        incompletePlayer.id = player.id;
        incompletePlayer.pos = player.pos;
        return incompletePlayer;
      });
      return incompletePlayers; //возвращаем массив IncompleteAuthorDto
    }
  
    async update(id: number, updatedPlayer: Player) {
      //получаем объект Author для обновления по id
      const player = await this.playerRepository.findOne({ where: { id } }); //получаем объект Author по id из БД
      player.nickname = updatedPlayer.nickname; //обновляем поля объекта Author
      player.fullname = updatedPlayer.fullname; //обновляем поля объекта Author
      player.pos = updatedPlayer.pos;
      player.main = updatedPlayer.main;
      player.matches = updatedPlayer.matches;
      player.trainers = updatedPlayer.trainers;
      await this.playerRepository.save(player); //сохраняем объект Author в БД
      return player; //возвращаем объект Author
    }
  

    remove(id: number) {
      this.playerRepository.delete({ id }); //удаляем объект Author из БД
    }
  
}
