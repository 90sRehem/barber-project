import { Contract } from "@barber-project/validations";
import { Notification } from "./Notification";

export abstract class Notifiable {
  private _notifications: Array<Notification> = new Array<Notification>();

  /**
   *
   */
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  constructor() { }

  public get Messages(): Array<string> {
    return this._notifications.map((x) => x.Message);
  }

  public Invalid = (): boolean => this._notifications.length > 0;
  public Valid = (): boolean => this._notifications.length <= 0;

  public get GetNotifications(): Array<Notification> {
    return this._notifications;
  }

  public AddNotification(property: string, message: string): void;
  public AddNotification(notification: Notification): void;
  public AddNotification(notifications: Array<Notification>): void;
  public AddNotification(Contract: Contract): void;
  public AddNotification(
    property?: string | Notification | Array<Notification> | Contract,
    message?: string,
  ): void {
    if (property instanceof Notification) {
      this._notifications.unshift(property);
      return;
    }
    if (property instanceof Contract) {
      const nots = property.GetNotifications;
      this._notifications.unshift(...nots);
      return;
    }
    // eslint-disable-next-line eqeqeq
    if (typeof property == "string") {
      const newNotification = new Notification(property, message);
      this._notifications.unshift(newNotification);
    }

    this._notifications.unshift(...(property as Array<Notification>));
  }
}