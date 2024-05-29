import { Module } from '@nestjs/common';
import { PlayersModule } from './players/players.module';
import { MatchesModule } from './matches/matches.module';
import { TrainersModule } from './trainers/trainers.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    PlayersModule,
    MatchesModule,
    TrainersModule,
    TypeOrmModule.forRoot({
      type: 'postgres', //тип подключаемой БД
      port: 5432, //порт
      username: 'postgres', //имя пользователя
      password: 'password', //пароль
      host: 'localhost', //хост, в нашем случае БД развернута локально
      synchronize: false, //отключаем автосинхронизацию(в противном случае при каждом перезапуске наша БД будет создаваться заново)
      logging: 'all', //включим логирование для удобства отслеживания процессов
      entities: ['dist/**/*.entity{.ts,.js}'], //указываем путь к сущностям
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
