export class Notification {
  public Message: string;
  public Property: string;

  /**
   *
   */
  constructor(property?: string, message?: string) {
    this.Message = message;
    this.Property = property;
  }
}
