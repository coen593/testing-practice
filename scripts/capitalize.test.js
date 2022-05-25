import capitalize from './capitalize';

test('"test" should become "Test"', () => {
  expect(capitalize('test')).toBe('Test');
});

test('empty should return empty string', () => {
    expect(capitalize('')).toBe('')
})

test('Multiple words capitalizes only first', () => {
    expect(capitalize('boo far baz')).toBe('Boo far baz')
})

test('If first letter already capitalized no change', () => {
    expect(capitalize('Check')).toBe('Check')
})

test('If other letters capitalized, they remain so', () => {
    expect(capitalize('cHECK')).toBe('CHECK')
})