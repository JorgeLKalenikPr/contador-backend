import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { HolidayRepository } from '../../infra/repository/holidays-repository';
import { FindNextHolidayReturnDto } from '../../models/dtos/find-next-holiday/find-next-holiday.return.dto';

@Injectable()
export class FindNextHolidayUseCase {
  constructor(private readonly holidaysRepository: HolidayRepository) {}

  async execute(): Promise<FindNextHolidayReturnDto | undefined> {
    try {
      const next = await this.holidaysRepository.findNextHoliday();
      if (!next) {
        throw new InternalServerErrorException('Falha ao buscar feriados');
      }

      return next;
    } catch (error) {
      console.log(error);
    }
  }
}
