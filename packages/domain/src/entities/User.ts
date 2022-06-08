import {
  Name,
  Email,
  Password,
  Avatar,
} from "../valueObjects";
import { Entity } from "../core/Entity";
import { UniqueId } from "../core/UniqueId";

interface IUserProps {
  name: Name,
  email: Email,
  password: Password,
  avatar?: Avatar,
}

export class User extends Entity<IUserProps> {
  /**
   *
   */
  constructor(props: IUserProps, id?: UniqueId) {
    super(props, id);
    this.AddNotifications(this.Email.GetNotifications);
    this.AddNotifications(this.Name.GetNotifications);
    this.AddNotifications(this.Password.GetNotifications);
  }

  public get Name(): Name {
    return this._props.name;
  }

  public get Email(): Email {
    return this._props.email;
  }

  public get Password(): Password {
    return this._props.password;
  }

  public get Avatar(): Avatar {
    return this._props.avatar;
  }
}
