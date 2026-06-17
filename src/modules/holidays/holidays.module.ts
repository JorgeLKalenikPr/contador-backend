import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayEntity } from './models/entity/holiday.entity';
import { HolidayRepository } from './infra/repository/holidays-repository';
import { SyncronizeHolidaysRoutine } from './use-case/syncronize-holidays/syncronize-holidays.routine';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayEntity])],
  providers: [HolidayRepository, SyncronizeHolidaysRoutine],
  controllers: [],
  exports: [],
})
export class HolidayModule {}
