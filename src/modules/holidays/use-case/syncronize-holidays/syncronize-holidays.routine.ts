import { brasilApiConnection } from 'src/config/external-api/brasil-api/brasil-api.api';
import { HolidayRepository } from '../../infra/repository/holidays-repository';
import { HolidayEntity } from '../../models/entity/holiday.entity';
import { Injectable, Logger, OnModuleInit } from '@nestjs/common';

@Injectable()
export class SyncronizeHolidaysRoutine implements OnModuleInit {
  constructor(private readonly holidaysRepository: HolidayRepository) {}

  async onModuleInit() {
    await this.execute();
  }

  async execute() {
    const logger: Logger = new Logger('Routines');
    const currentYear = new Date().getFullYear();

    const years: number[] = [];
    let year = currentYear;

    // eslint-disable-next-line prettier/prettier
    const alreadySynchonized = await this.holidaysRepository.existsForYear(currentYear);
    if (alreadySynchonized) {
      logger.debug('Feriados já sincronizados. Pulando rotina');
      return;
    }
    logger.debug('Feriados não sincronizados. Iniciando rotina');

    while (year < currentYear + 10) {
      years.push(year);
      year++;
    }

    const holidays = await Promise.all(
      years.map(async (year) => {
        const response = await brasilApiConnection.get<HolidayEntity[]>(
          `/feriados/v1/${year}`,
        );
        return response.data;
      }),
    );
    logger.debug(
      `${holidays.length} feriados encontrados, salvando no banco...`,
    );
    await Promise.all(
      holidays.flat().map((holiday) => this.holidaysRepository.create(holiday)),
    );

    logger.debug('Sucesso ao sincronizar feriados.');
  }
}
