/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './models/entity/user.entity';
import { UserRepository } from './infra/repository/user.repository';
import { RegisterUserUseCase } from './use-case/register-user/register-user.use-case';
import { RegisterUserController } from './use-case/register-user/register-user.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [
    UserRepository,
    RegisterUserUseCase],
  controllers: [
    RegisterUserController
  ],
  exports: [],
})
export class UserModule {}
