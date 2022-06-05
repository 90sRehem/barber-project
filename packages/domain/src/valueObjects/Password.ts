import { Contract } from "@barber-project/validations";
import bcrypt from "bcrypt";
import { ValueObject } from "../core";

interface IPasswordProps {
  value: string;
  hashed?: string;
}

export class Password extends ValueObject<IPasswordProps> {
  /**
   *
   */
  constructor(props: IPasswordProps) {
    super(props);
    this.AddNotification(new Contract()
      .IsRequired()
      .IsLengthLessThan(
        this.props.value,
        6,
        "Password.Value",
        "A senha deve ter no mínimo 6 digitos!",
      ));
  }

  public get Value(): IPasswordProps["value"] {
    return this.props.value;
  }

  public isAlreadyHashed(): boolean {
    return Boolean(this.props.hashed);
  }

  public async comparePassword(plainTextPassword: string): Promise<boolean> {
    let hashed: string;

    if (this.isAlreadyHashed()) {
      hashed = this.props.value;

      return bcrypt.compare(plainTextPassword, hashed);
    }

    return this.props.value === plainTextPassword;
  }

  public async getHashedValue(): Promise<string> {
    if (this.isAlreadyHashed()) {
      return this.props.value;
    }

    return bcrypt.hash(this.props.value, 8);
  }
}
