import { ApiPropertyOptional } from '@nestjs/swagger';
import { IsDateString, IsOptional, IsString } from 'class-validator';

export class UpdateUserEventDto {
  @ApiPropertyOptional({ description: 'Nome do evento' })
  @IsOptional()
  @IsString()
  name?: string;

  @ApiPropertyOptional({ description: 'Data do evento' })
  @IsOptional()
  @IsDateString()
  date?: string;

  @ApiPropertyOptional({ description: 'Descrição do evento' })
  @IsOptional()
  @IsString()
  description?: string;
}
