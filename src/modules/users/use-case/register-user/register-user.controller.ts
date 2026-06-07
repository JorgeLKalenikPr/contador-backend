import { Body, Controller, Post } from '@nestjs/common';
import { RegisterUserUseCase } from './register-user.use-case';
import { RegisterUserDto } from '../../models/dtos/register-user/register-user.dto';
import {
  ApiInternalServerErrorResponse,
  ApiOkResponse,
  ApiOperation,
} from '@nestjs/swagger';

@Controller('users')
export class RegisterUserController {
  constructor(private readonly registerUserUseCase: RegisterUserUseCase) {}

  @ApiOperation({
    summary: 'Rota para registro de usuário',
    description: 'Cria usuário para o email informado',
  })
  @ApiOkResponse({
    description: 'Usuário criado com sucesso',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro Interno no servidor',
  })
  @Post('')
  async execute(@Body() dto: RegisterUserDto) {
    return await this.registerUserUseCase.execute(dto);
  }
}
