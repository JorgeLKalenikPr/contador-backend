import { Between, Repository } from 'typeorm';
import { HolidayEntity } from '../../models/entity/holiday.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class HolidayRepository {
  constructor(
    @InjectRepository(HolidayEntity)
    private readonly holidaysTypeOrmRepository: Repository<HolidayEntity>,
  ) {}

  async create(newHoliday: HolidayEntity): Promise<HolidayEntity> {
    return await this.holidaysTypeOrmRepository.save(newHoliday);
  }

  async findNextHoliday(): Promise<HolidayEntity | null> {
    const data = await this.holidaysTypeOrmRepository
      .createQueryBuilder('t')
      .where('t.sua_data >= :agora', { agora: new Date() })
      .orderBy('t.sua_data', 'ASC')
      .limit(1)
      .getOne();

    if (data) {
      return data;
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
