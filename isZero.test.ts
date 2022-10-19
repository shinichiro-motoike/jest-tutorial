import { isZero } from "./isZero";

test("0を渡したらtrueになること", () => {
  const result = isZero(0);
  expect(result).toBe(true); // expect関数とマッチャーを使い、結果が期待する値になっているかを記述する
});

test("1を渡したらfalseになること", () => {
  const result = isZero(1);
  expect(result).toBe(false);
});
