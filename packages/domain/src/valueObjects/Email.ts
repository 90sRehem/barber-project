import { Contract } from "@barber-project/validations";
import { ValueObject } from "../core";

interface IEmailProps {
  address: string;
}

export class Email extends ValueObject<IEmailProps> {
  constructor(props: IEmailProps) {
    super(props);

    this.AddNotification(new Contract()
      .IsRequired()
      .IsEmail(this.props.address, "Email.Address", "E-mail inválido."));
  }

  public get Address(): IEmailProps["address"] {
    return this.props.address;
  }
}
