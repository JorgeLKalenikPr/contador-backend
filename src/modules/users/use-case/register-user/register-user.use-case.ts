import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { UsersEntity } from '../../models/entity/user.entity';
import { UserRepository } from '../../infra/repository/user.repository';
import { RegisterUserDto } from '../../models/dtos/register-user/register-user.dto';

@Injectable()
export class RegisterUserUseCase {
  constructor(private readonly usersRepository: UserRepository) {}

  async execute(dto: RegisterUserDto) {
    try {
      const newUser: UsersEntity = new UsersEntity();
      newUser.email = dto.email;

      await this.usersRepository.create(newUser);
      return {
        message: 'Sucesso ao criar usuário',
      };
    } catch (error: any) {
      throw new InternalServerErrorException(error.message);
    }
  }
}
