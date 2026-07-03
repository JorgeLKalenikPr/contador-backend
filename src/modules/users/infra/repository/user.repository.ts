import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UsersEntity } from '../../models/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly usersTypeOrmRepository: Repository<UsersEntity>,
  ) {}

  async create(newEntity: UsersEntity) {
    return await this.usersTypeOrmRepository.save(newEntity);
  }

  async findByEmail(email: string): Promise<UsersEntity | null> {
    return await this.usersTypeOrmRepository.findOne({
      where: { email },
    });
  }
}
