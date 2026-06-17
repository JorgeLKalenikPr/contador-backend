/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayEntity } from './models/entity/holiday.entity';
import { HolidayRepository } from './infra/repository/holidays-repository';
import { SyncronizeHolidaysRoutine } from './use-case/syncronize-holidays/syncronize-holidays.routine';
import { FindNextHolidayUseCase } from './use-case/find-next-holiday/find-next-holiday.use-case';
import { FindNextHolidayController } from './use-case/find-next-holiday/find-next-holiday.controller';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayEntity])],
  providers: [
    HolidayRepository,
    SyncronizeHolidaysRoutine,
    FindNextHolidayUseCase,
  ],
  controllers: [
    FindNextHolidayController
  ],
  exports: [],
})
export class HolidayModule {}
