import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import {
  DB_PG_HOST,
  DB_PG_PORT,
  DB_PG_USERNAME,
  DB_PG_PASSWORD,
  DB_PG_DATABASE,
  DB_PG_SCHEMA,
  DB_ENABLE_LOGGING,
} from 'src/_common/models/constants/env.constants';

@Injectable()
export class DbConfig {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      host: DB_PG_HOST,
      port: DB_PG_PORT,
      username: DB_PG_USERNAME,
      password: DB_PG_PASSWORD,
      database: DB_PG_DATABASE,
      schema: DB_PG_SCHEMA,
      logging: DB_ENABLE_LOGGING,
      synchronize: true,
      entities: [__dirname + '/../../**/*.entity.{js,ts}'],
    };
  }
}
