import * as assert from "power-assert";
import { passwordConfirmationValidator } from "../password";

describe("password", () => {
  test("password confirmation", () => {
    const password = "xxxxx";
    const confirmation = "xxxxx";
    assert.deepStrictEqual(
      passwordConfirmationValidator(password, confirmation),
      {
        error: false,
        message: ""
      }
    );
  });
  test("password confirmation not matched", () => {
    const password = "xxxxx";
    const confirmation = "xxxxx7";
    assert.deepStrictEqual(
      passwordConfirmationValidator(password, confirmation),
      {
        error: true,
        message: "password not matched."
      }
    );
  });
  test("password confirmation with blank", () => {
    const password = "xxxx";
    const confirmation = "";
    assert.deepStrictEqual(
      passwordConfirmationValidator(password, confirmation),
      {
        error: true,
        message: "required."
      }
    );
  });
});
