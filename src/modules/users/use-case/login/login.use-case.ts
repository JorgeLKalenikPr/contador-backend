import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../../infra/repository/user.repository';
import { UsersEntity } from '../../models/entity/user.entity';
import { LoginUserDto } from '../../models/dtos/login/login.dto';

@Injectable()
export class LoginUserUseCase {
  constructor(private readonly usersRepository: UserRepository) {}

  async execute(dto: LoginUserDto): Promise<UsersEntity> {
    const user = await this.usersRepository.findByEmail(dto.email);

    if (!user) {
      throw new NotFoundException('Usuário não encontrado');
    }

    return user;
  }
}
