import { Notifiable } from "@barber-project/notifications";
import { UniqueId } from "./UniqueId";

export abstract class Entity<T> extends Notifiable {
  protected readonly _id: UniqueId;
  public readonly _props: T;
  /**
   * This class takes responsibility for generating the id, creation date and update date.
   */
  constructor(props: T, id?: UniqueId) {
    super();
    this._id = id || new UniqueId();
    this._props = props;
  }

  public get Id(): UniqueId {
    return this._id;
  }

  /**
   * Equals
   */
  public Equals(object?: Entity<T>): boolean {
    if (object === null || object === undefined) {
      return false;
    }

    if (this === object) {
      return true;
    }

    if (!(object instanceof Entity)) {
      return false;
    }

    return this._id.Equals(object._id);
  }
}
