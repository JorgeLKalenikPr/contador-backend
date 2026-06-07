import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersEntity } from '../../models/entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UsersEntity)
    private readonly UsersTypeOrmRepository: Repository<UsersEntity>,
  ) {}

  async create(newUser: UsersEntity): Promise<UsersEntity> {
    return await this.UsersTypeOrmRepository.save(newUser);
  }
}
