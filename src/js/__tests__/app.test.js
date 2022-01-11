/* eslint-disable quotes, linebreak-style */
import demo from "../app";

test("test app.js", () => {
  const resDemo = demo(1234);
  expect(resDemo).toBe(1234);
});
