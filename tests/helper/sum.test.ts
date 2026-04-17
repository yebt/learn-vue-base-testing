import { test, expect } from "vitest";
import { sum } from "../../src/helper/sum.ts";

test("sum of 1 and 2 should be 3", () => {
  // expect(sum(1, 2)).toBe(3);

  // Arrage
  const a = 1;
  const b = 2;

  // Act
  const result = sum(a, b);

  // Assert
  // expect(result).toBe(3);// More flexible
  expect(result).toBe(a + b);// More flexible

});
