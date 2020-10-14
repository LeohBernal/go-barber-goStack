import Notification from '@modules/notifications/infra/typeorm/schemas/Notification';
import ICreateNotifcationDTO from '@modules/notifications/dtos/ICreateNotificationDTO';

export default interface INotificationRepository {
  create(data: ICreateNotifcationDTO): Promise<Notification>;
}
