import { ObjectID } from 'mongodb';

import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import INotificationsRepository from '@modules/notifications/repositories/INotificationsRepository';
import ICreateNotifcationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

class NotificationsRepository implements INotificationsRepository {
  private notifications: Notification[] = [];

  public async create({
    content,
    recipient_id,
  }: ICreateNotifcationDTO): Promise<Notification> {
    const notification = new Notification();
    Object.assign(this.notifications, {
      id: new ObjectID(),
      content,
      recipient_id,
    });
    this.notifications.push(notification);
    return notification;
  }
}

export default NotificationsRepository;
