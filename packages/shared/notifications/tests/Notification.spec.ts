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
    invalidNotificationUsingPropAndMsg = new InvalidNotificationUsingPropAndMsg();
    invalidNotificationUsingObject = new InvalidNotificationUsingObject();
    invalidNotificationUsingObjectArray = new InvalidNotificationUsingObjectArray();
  });

  it("Should be able to add a notification with property e message", () => {
    // expect(invalidNotificationUsingObject).toHaveProperty("Invalid", true);
    expect(false).toBe(true);
  });

  it("Should be able to add a notification with notification class", () => {
    expect(false).toBe(true);
  });
  it("Should return error", () => {
    expect(false).toBe(true);
  });
  it("Should be able to add a notification with a contract", () => {
    expect(false).toBe(true);
  });
  it("Should be able to add a notification with an array of notifications", () => {
    expect(false).toBe(true);
  });
});
