import { add, subtract, multiply, divide } from './calculator'

test('Basic add', () => {
    expect(add(1,2)).toBe(3)
})

test('Add negative numbers', () => {
    expect(add(-1,2)).toBe(1)
})

test('add decimals', () => {
    expect(add(2,0.5)).toBe(2.5)
    expect(add(0.2,0.5)).toBe(0.7)
})

test('Basic subtract', () => {
    expect(subtract(3,2)).toBe(1)
})

test('subtract negative numbers', () => {
    expect(subtract(-1,2)).toBe(-3)
})

test('subtract decimals', () => {
    expect(subtract(2,0.5)).toBe(1.5)
    expect(subtract(0.2,0.5)).toBe(-0.3)
})

test('Basic multiply', () => {
    expect(multiply(3,2)).toBe(6)
})

test('multiply negative numbers', () => {
    expect(multiply(-1,2)).toBe(-2)
})

test('multiply decimals', () => {
    expect(multiply(2,0.5)).toBe(1)
    expect(multiply(0.2,0.5)).toBe(0.1)
})

test('Basic divide', () => {
    expect(divide(6,2)).toBe(3)
})

test('divide negative numbers', () => {
    expect(divide(-2,1)).toBe(-2)
})

test('divide decimals', () => {
    expect(divide(2,0.5)).toBe(4)
    expect(divide(0.2,0.5)).toBe(0.4)
})

test('Divide by 0', () => {
    expect(divide(1,0)).toBe('DIVIDE BY 0')
})
