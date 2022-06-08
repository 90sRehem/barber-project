import { User } from "../../src/entities";
import {
  Email,
  Name,
  Password,
} from "../../src/valueObjects";

describe("User tests", () => {
  it("should return success when creating user", () => {
    const user = new User({
      email: new Email({ address: "" }),
      name: new Name({ firstName: "", lastName: "" }),
      password: new Password({ value: "" }),
    });
    expect(user.Valid).toBe(true);
  });
});
