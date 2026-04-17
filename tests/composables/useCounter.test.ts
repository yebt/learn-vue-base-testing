import { useCounter } from '@/composables/useCounter'

describe('useCounter composable', () => {
  it('Initialize with default value in 0', () => {
    const { counter } = useCounter()
    expect(counter.value).toBe(0)
  })

  it('Allow Initialize with value', () => {
    const initialValue = 5
    const { counter } = useCounter(initialValue)
    expect(counter.value).toBe(initialValue)
  })

  it('Set the Square ', () => {
    const initialValue = 3
    const squareValue = initialValue * initialValue
    const { squareCounter } = useCounter(initialValue)
    expect(squareCounter.value).toBe(squareValue)
  })

  it('Increase the initial value ', () => {
    const initialValue = 5
    const {counter, squareCounter } = useCounter(initialValue)

    const increasedValue = initialValue + 2
    const squareValue = increasedValue * increasedValue

    counter.value++
    counter.value++

    expect(counter.value).toBe(increasedValue)
    expect(squareCounter.value).toBe(squareValue)
  })

})
