import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEventRepository } from '../../infra/typeorm/user-events.repository';

@Injectable()
export class DeleteUserEventUseCase {
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async execute(id: number): Promise<void> {
    const event = await this.userEventRepository.findById(id);

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    await this.userEventRepository.delete(id);
  }
}
