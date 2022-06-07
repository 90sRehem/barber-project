import { Notifiable } from "../Notifiable";
import { Notification } from "../Notification";

export class InvalidNotificationUsingObject extends Notifiable {
  constructor() {
    super();
    this.AddNotification(new Notification(
      "InvalidUsingObject.test",
      "Notificação de teste",
    ));
  }
}

// const teste = new InvalidNotificationUsingObject().Valid()
console.log(new InvalidNotificationUsingObject());
