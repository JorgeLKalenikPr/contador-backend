import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DbConfig } from './config/database/database.config';
import { UserEventsModule } from './modules/users-events/user-events.module';
import { HolidayModule } from './modules/holidays/holidays.module';
import { UserModule } from './modules/users/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DbConfig,
    }),
    HolidayModule,
    UserModule,
    UserEventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
