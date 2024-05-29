import { ApiProperty } from '@nestjs/swagger';
export class CreatePlayerDto {
  @ApiProperty({ example: 'OBLA', description: 'Никнейм' })
  nickname: string;
  @ApiProperty({ example: 'Ivan', description: 'Имя' })
  fullname: string;
  @ApiProperty({ example: '4', description: 'Позиция' })
  pos: number;
  @ApiProperty({ example: 'ZXC', description: 'По жизни' })
  main: string;
  matches: number[];
}
