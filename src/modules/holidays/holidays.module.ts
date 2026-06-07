import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HolidayEntity } from './models/entity/holiday.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HolidayEntity])],
  providers: [],
  controllers: [],
  exports: [],
})
export class HolidayModule {}
