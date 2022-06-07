import { Contract } from "@barber-project/validations";
import { ValueObject } from "../core";

interface INameProps {
  firstName: string;
  lastName: string;
}

export class Name extends ValueObject<INameProps> {
  /**
   *
   */
  constructor(props: INameProps) {
    super(props);
    this.AddNotification(new Contract()
      .IsRequired()
      .IsNotNullOrEmptyString(this.FirstName, "Name.FirstName", "O nome é obrigatório!")
      .HasMinLength(this.FirstName, 3, "Name.FirstName", "Nome deve conter no mínimo 3 carecteres!"));
  }

  public get Name(): string {
    return `${this.props.firstName} ${this.props.lastName}`;
  }

  public get FirstName(): INameProps["firstName"] {
    return this.props.firstName;
  }

  public get LastName(): INameProps["lastName"] {
    return this.props.lastName;
  }
}
