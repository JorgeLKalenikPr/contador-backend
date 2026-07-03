import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateUserEventDto {
  @ApiProperty({
    description: 'Nome do evento',
  })
  @IsNotEmpty()
  @IsString()
  name: string;

  @ApiProperty({
    description: 'Data do evento',
  })
  @IsNotEmpty()
  @IsDateString()
  date: string;

  @ApiPropertyOptional({
    description: 'Nome do evento',
  })
  @IsString()
  description: string;

  @ApiProperty({
    description: 'Id do usuário para criar o evento',
  })
  @IsNumber()
  userId: number;
}
