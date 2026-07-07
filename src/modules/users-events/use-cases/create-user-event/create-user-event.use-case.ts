import { Injectable } from '@nestjs/common';
import { CreateUserEventDto } from '../../models/dtos/create/create-user-event.dto';
import { UserEventsEntity } from '../../models/entity/user-events.entity';
import { UserEventRepository } from '../../infra/typeorm/user-events.repository';

@Injectable()
export class CreateUseEventUseCase {
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async execute(dto: CreateUserEventDto): Promise<UserEventsEntity> {
    const newEvent: UserEventsEntity = new UserEventsEntity();

    newEvent.name = dto.name;
    newEvent.date = new Date(dto.date);
    newEvent.description = dto.description;
    newEvent.userId = dto.userId;

    return await this.userEventRepository.create(newEvent);
  }
}
