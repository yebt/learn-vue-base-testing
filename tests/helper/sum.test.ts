import { test, expect, describe } from 'vitest'
import { sum, sumArray } from '../../src/helper/sum.ts'

test('sum of 1 and 2 should be 3', () => {
  // expect(sum(1, 2)).toBe(3);

  // Arrage
  const a = 1
  const b = 2

  // Act
  const result = sum(a, b)

  // Assert
  // expect(result).toBe(3);// More flexible
  expect(result).toBe(a + b) // More flexible
})

describe('Sum Array', () => {
  test('Sum in Array be 0 on empty array', () => {
    expect(sumArray([])).toBe(0)
  })

  test('Sum in Array be operate array of numbers', () => {
    const arr = [1, 2, 3, 4]

    const result = sumArray(arr)

    expect(result).toBe(10)
  })
})
