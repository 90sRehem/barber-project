import { Notifiable } from "../Notifiable";

export class InvalidNotificationUsingPropAndMsg extends Notifiable {
  constructor() {
    super();
    this.AddNotification("InvalidUsingString.test", "Notificação de teste");
  }
}
console.log(new InvalidNotificationUsingPropAndMsg().Valid());
