import { AuthHelper } from "../src/common/helpers/authHelper";

describe("Authorization tests", () => {
  test("Incorrect Email format test", () => {
    expect(() => {
      AuthHelper.checkEmail("someemail@q.q");
    }).toThrow("Incorrect Email format");
  });
  
  test("Empty Email test", () => {
    expect(() => {
      AuthHelper.checkEmail();
    }).toThrow("Incorrect Email format");
  });

  test("Short password test", () => {
    expect(() => {
      AuthHelper.checkPassword("pwd");
    }).toThrow("Password is too short");
  });
});
