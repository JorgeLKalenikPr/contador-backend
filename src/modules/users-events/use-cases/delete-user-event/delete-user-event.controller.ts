import {
  Controller,
  Delete,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { DeleteUserEventUseCase } from './delete-user-event.use-case';

@ApiTags('Eventos do Usuário')
@Controller('user-event')
export class DeleteUserEventController {
  constructor(
    private readonly deleteUserEventUseCase: DeleteUserEventUseCase,
  ) {}

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({
    description: 'Rota para exclusão de evento',
    summary: 'Deleta um evento pelo id',
  })
  async handle(@Param('id', ParseIntPipe) id: number) {
    await this.deleteUserEventUseCase.execute(id);
  }
}
