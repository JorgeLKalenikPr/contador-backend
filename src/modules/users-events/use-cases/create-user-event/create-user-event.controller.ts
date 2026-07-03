import { Body, Controller, Post } from '@nestjs/common';
import { CreateUseEventUseCase } from './create-user-event.use-case';
import { CreateUserEventDto } from '../../models/dtos/create/create-user-event.dto';
import { ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Eventos do Usuário')
@Controller('user-event')
export class CreateUserEventController {
  constructor(private readonly createUserEventUseCase: CreateUseEventUseCase) {}

  @ApiOperation({
    description: 'Rota para criação de evento',
    summary: 'Cria evento para o usuário',
  })
  @Post('')
  async handle(@Body() dto: CreateUserEventDto) {
    return await this.createUserEventUseCase.execute(dto);
  }
}
