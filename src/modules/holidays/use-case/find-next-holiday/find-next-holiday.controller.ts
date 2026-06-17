import { ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { FindNextHolidayReturnDto } from '../../models/dtos/find-next-holiday/find-next-holiday.return.dto';
import { FindNextHolidayUseCase } from './find-next-holiday.use-case';
import { Controller, Get } from '@nestjs/common';

@Controller('holidays')
export class FindNextHolidayController {
  constructor(
    private readonly findNextHolidayUseCase: FindNextHolidayUseCase,
  ) {}

  @ApiOperation({
    description: 'Rota para busca de proximo feriado',
    summary: 'Busca feriado mais proximo',
  })
  @ApiOkResponse({
    description: 'Retorna informações do proximo feriado',
    type: FindNextHolidayReturnDto,
  })
  @Get('next')
  async handle(): Promise<FindNextHolidayReturnDto | undefined> {
    return await this.findNextHolidayUseCase.execute();
  }
}
