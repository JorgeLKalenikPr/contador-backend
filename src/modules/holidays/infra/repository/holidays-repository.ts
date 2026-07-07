/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Between, Repository } from 'typeorm';
import { HolidayEntity } from '../../models/entity/holiday.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { FindNextHolidayReturnDto } from '../../models/dtos/find-next-holiday/find-next-holiday.return.dto';

@Injectable()
export class HolidayRepository {
  constructor(
    @InjectRepository(HolidayEntity)
    private readonly holidaysTypeOrmRepository: Repository<HolidayEntity>,
  ) {}

  async create(newHoliday: HolidayEntity): Promise<HolidayEntity> {
    return await this.holidaysTypeOrmRepository.save(newHoliday);
  }

  async findNextHoliday(): Promise<FindNextHolidayReturnDto | null> {
    const data = await this.holidaysTypeOrmRepository.query(
      /* sql */ `
      SELECT 
        *,
        date - CURRENT_DATE AS "timeUntil"
      FROM
        contador.holiday
      WHERE
        contador.holiday."date" >= CURRENT_DATE
      ORDER BY
        contador.holiday."date"
      LIMIT 1
      `, [],
    );

    if (data) {
      return data[0];
    }
    return null;
  }

  async existsForYear(year: number): Promise<boolean> {
    const startDate = new Date(`${year}-01-01T00:00:00`);
    const endDate = new Date(`${year}-12-31T23:59:59`);

    const exists: boolean = await this.holidaysTypeOrmRepository.exists({
      where: {
        date: Between(startDate, endDate),
      },
    });

    return exists;
  }
}
