import { Notification } from "./Notification";

export interface INotifiable {
  AddNotification({ Property, Message }: Notification): void;
  AddNotifications(notifications: Array<Notification>): void;
}
