import { UserEventsEntity } from '../../entity/user-events.entity';

export class UserEventWithCountdown {
  event: UserEventsEntity;
  daysUntil: number;
}
