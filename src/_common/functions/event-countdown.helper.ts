export class EventCountdownHelper {
  static calculateDaysUntilEvent(eventDate: Date): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const target = new Date(eventDate);
    target.setHours(0, 0, 0, 0);

    const diffInMs = target.getTime() - today.getTime();
    const msPerDay = 1000 * 60 * 60 * 24;

    return Math.ceil(diffInMs / msPerDay);
  }
}
