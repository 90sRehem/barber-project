import { Notifiable } from "../Notifiable";
import { Notification } from "../Notification";

export class InvalidNotificationUsingObjectArray extends Notifiable {
  constructor() {
    super();
    const notifications = [
      new Notification("InvalidUsingObject.test", "Notificação de teste 1"),
      new Notification("InvalidUsingObject.test", "Notificação de teste 2"),
      new Notification("InvalidUsingObject.test", "Notificação de teste 3"),
    ];
    this.AddNotifications(notifications);
  }
}