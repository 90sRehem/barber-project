import { Contract } from "@barber-project/validations";
import { ValueObject } from "../core";

interface IAvatarProps {
  url: string;
}

export class Avatar extends ValueObject<IAvatarProps> {
  constructor(props: IAvatarProps) {
    super(props);
    this.AddNotification(
      new Contract()
        .IsRequired()
        .IsUrl(this.props.url, "Avatar.Url", "Url inválida."),
    );
  }

  public get Url(): IAvatarProps["url"] {
    return this.props.url;
  }
}
