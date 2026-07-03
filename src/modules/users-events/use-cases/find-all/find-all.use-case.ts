import { Injectable } from '@nestjs/common';
import { UserEventRepository } from '../../infra/typeorm/user-events.repository';
import { UserEventWithCountdown } from '../../models/dtos/find-with-count-down/find-with-count-down.dto';
import { EventCountdownHelper } from 'src/_common/functions/event-countdown.helper';

@Injectable()
export class FindAllUserEventsUseCase {
  constructor(private readonly userEventRepository: UserEventRepository) {}

  async execute(userId: number): Promise<UserEventWithCountdown[]> {
    const events = await this.userEventRepository.findAllByUserId(userId);

    return events.map((event) => ({
      event,
      daysUntil: EventCountdownHelper.calculateDaysUntilEvent(event.date),
    }));
  }
}
