import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersEntity } from './models/entity/user.entity';
import { UserRepository } from './infra/repository/user.repository';
import { RegisterUserUseCase } from './use-case/register-user/register-user.use-case';
import { RegisterUserController } from './use-case/register-user/register-user.controller';
import { LoginUserUseCase } from './use-case/login/login.use-case';
import { LoginUserController } from './use-case/login/login.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsersEntity])],
  providers: [UserRepository, RegisterUserUseCase, LoginUserUseCase],
  controllers: [RegisterUserController, LoginUserController],
  exports: [],
})
export class UserModule {}
