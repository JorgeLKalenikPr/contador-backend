import { Body, Controller, Post } from '@nestjs/common';
import {
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { LoginUserUseCase } from './login.use-case';
import { LoginUserDto } from '../../models/dtos/login/login.dto';

@ApiTags('Auth')
@Controller('users')
export class LoginUserController {
  constructor(private readonly loginUserUseCase: LoginUserUseCase) {}

  @ApiOperation({
    summary: 'Rota para login de usuário',
    description: 'Busca usuário pelo email informado (sem senha)',
  })
  @ApiOkResponse({
    description: 'Usuário encontrado com sucesso',
  })
  @ApiNotFoundResponse({
    description: 'Usuário não encontrado',
  })
  @ApiInternalServerErrorResponse({
    description: 'Erro Interno no servidor',
  })
  @Post('login')
  async execute(@Body() dto: LoginUserDto) {
    return await this.loginUserUseCase.execute(dto);
  }
}
