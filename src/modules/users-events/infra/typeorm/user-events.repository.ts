import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { UserEventsEntity } from '../../models/entity/user-events.entity';
import { DeleteResult, Repository } from 'typeorm';

@Injectable()
export class UserEventRepository {
  constructor(
    @InjectRepository(UserEventsEntity)
    private readonly userEventsTypeOrmRepository: Repository<UserEventsEntity>,
  ) {}

  async create(newEntity: UserEventsEntity) {
    return await this.userEventsTypeOrmRepository.save(newEntity);
  }

  async findById(id: number): Promise<UserEventsEntity | null> {
    return await this.userEventsTypeOrmRepository.findOne({
      where: { id: id },
    });
  }

  async findAllByUserId(userId: number): Promise<UserEventsEntity[]> {
    return await this.userEventsTypeOrmRepository.find({
      where: { userId },
    });
  }

  async delete(id: number): Promise<DeleteResult> {
    return await this.userEventsTypeOrmRepository.delete(id);
  }

  async update(id: number, data: UserEventsEntity) {
    return await this.userEventsTypeOrmRepository.update({ id: id }, data);
  }
}
