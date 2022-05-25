import reverseString from './reverseString'

test('Basic test', () => {
    expect(reverseString('abc')).toBe('cba')
})

test('Empty string', () => {
    expect(reverseString('')).toBe('')
})

test('One character', () => {
    expect(reverseString('a')).toBe('a')
})

test('Multiple words', () => {
    expect(reverseString('abc cde')).toBe('edc cba')
})

test('Non-string error', () => {
    expect(reverseString({key: 'value'})).toBe('NOT A STRING')
})