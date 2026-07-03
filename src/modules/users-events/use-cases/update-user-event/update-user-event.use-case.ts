import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEventRepository } from '../../infra/typeorm/user-events.repository';
import { UserEventsEntity } from '../../models/entity/user-events.entity';
import { UpdateUserEventDto } from '../../models/dtos/update/update.dto';

@Injectable()
export class UpdateUserEventUseCase {
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async execute(
    id: number,
    dto: UpdateUserEventDto,
  ): Promise<UserEventsEntity> {
    const event = await this.userEventRepository.findById(id);

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    if (dto.name !== undefined) event.name = dto.name;
    if (dto.date !== undefined) event.date = new Date(dto.date);
    if (dto.description !== undefined) event.description = dto.description;

    return await this.userEventRepository.create(event); // save funciona pra update também
  }
}
