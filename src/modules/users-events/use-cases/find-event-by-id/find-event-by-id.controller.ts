import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindUserEventByIdUseCase } from './find-event-by-id.use-case';

@ApiTags('Eventos do Usuário')
@Controller('user-event')
export class FindUserEventByIdController {
  constructor(
    private readonly findUserEventByIdUseCase: FindUserEventByIdUseCase,
  ) {}

  @Get('event/:id')
  @ApiOperation({
    description: 'Rota para busca de evento por id',
    summary: 'Busca evento pelo id',
  })
  async handle(@Param('id', ParseIntPipe) id: number) {
    console.log('aqui entrou');
    return await this.findUserEventByIdUseCase.execute(id);
  }
}
