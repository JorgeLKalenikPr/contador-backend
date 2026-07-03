import { Injectable, NotFoundException } from '@nestjs/common';
import { UserEventRepository } from '../../infra/typeorm/user-events.repository';
import { EventCountdownHelper } from 'src/_common/functions/event-countdown.helper';
import { UserEventWithCountdown } from '../../models/dtos/find-with-count-down/find-with-count-down.dto';

@Injectable()
export class FindUserEventByIdUseCase {
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async execute(id: number): Promise<UserEventWithCountdown> {
    const event = await this.userEventRepository.findById(id);

    if (!event) {
      throw new NotFoundException(`Evento com id ${id} não encontrado`);
    }

    return {
      event,
      daysUntil: EventCountdownHelper.calculateDaysUntilEvent(event.date),
    };
  }
}
