import { Body, Controller, Param, ParseIntPipe, Patch } from '@nestjs/common';
import { ApiOperation } from '@nestjs/swagger';
import { UpdateUserEventUseCase } from './update-user-event.use-case';
import { UpdateUserEventDto } from '../../models/dtos/update/update.dto';

@Controller('user-event')
export class UpdateUserEventController {
  constructor(
    private readonly updateUserEventUseCase: UpdateUserEventUseCase,
  ) {}

  @Patch(':id')
  @ApiOperation({
    description: 'Rota para edição de evento',
    summary: 'Edita um evento pelo id',
  })
  async handle(
    @Param('id', ParseIntPipe) id: number,
    @Body() dto: UpdateUserEventDto,
  ) {
    return await this.updateUserEventUseCase.execute(id, dto);
  }
}
