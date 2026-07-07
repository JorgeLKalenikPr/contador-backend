import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class RegisterUserDto {
  @ApiProperty({
    description: 'Email do usuário',
  })
  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
