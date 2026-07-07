import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEventRepository } from '../../infra/typeorm/user-events.repository';
import { UpdateUserEventDto } from '../../models/dtos/update/update.dto';

@Injectable()
export class UpdateUserEventUseCase {
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async execute(id: number, dto: UpdateUserEventDto) {
    const event = await this.userEventRepository.findById(id);

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    if (dto.name) event.name = dto.name;
    if (dto.date) event.date = new Date(dto.date);
    if (dto.description) event.description = dto.description;

    return await this.userEventRepository.update(id, event);
  }
}
