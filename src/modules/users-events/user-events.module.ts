import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEventsEntity } from './models/entity/user-events.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserEventsEntity])],
  providers: [],
  controllers: [],
  exports: [],
})
export class UserEventsModule {}
