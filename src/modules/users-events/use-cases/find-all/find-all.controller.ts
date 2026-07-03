import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { FindAllUserEventsUseCase } from './find-all.use-case';

@ApiTags('Eventos do Usuário')
@Controller('user-event')
export class FindAllUserEventsController {
  constructor(
    private readonly findAllUserEventsUseCase: FindAllUserEventsUseCase,
  ) {}

  @Get('by-user/:userId')
  @ApiOperation({
    description: 'Rota para listagem de eventos com contagem de dias restantes',
    summary: 'Lista todos os eventos do usuário',
  })
  async handle(@Param('userId', ParseIntPipe) userId: number) {
    return await this.findAllUserEventsUseCase.execute(userId);
  }
}
