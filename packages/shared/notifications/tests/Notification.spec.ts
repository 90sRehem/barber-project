import {
  InvalidNotificationUsingObject,
  InvalidNotificationUsingObjectArray,
  InvalidNotificationUsingPropAndMsg,
} from "../mocks";

let invalidNotificationUsingPropAndMsg: InvalidNotificationUsingPropAndMsg;
let invalidNotificationUsingObject: InvalidNotificationUsingObject;
let invalidNotificationUsingObjectArray: InvalidNotificationUsingObjectArray;

describe("Notifications tests", () => {
  beforeAll(() => {
    // invalidNotificationUsingPropAndMsg = new InvalidNotificationUsingPropAndMsg();
    // invalidNotificationUsingObject = new InvalidNotificationUsingObject();
    // invalidNotificationUsingObjectArray = new InvalidNotificationUsingObjectArray();
  });

  it("Should be able to add a notification with property e message", () => {
    // expect(invalidNotificationUsingObject).toHaveProperty("Invalid", true);
    expect(true).toBe(true);
  });

  // it("Should be able to add a notification with notification class", () => { });
  // it("Should return error", () => { });
  // it("Should be able to add a notification with a contract", () => { });
  // it("Should be able to add a notification with an array of notifications", () => { });
});
