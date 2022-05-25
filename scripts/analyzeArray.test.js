import analyzeArray from './analyzeArray'

test('Basic check', () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
    })
})

test('Not a digit', () => {
    expect(analyzeArray([1,8,3,4,2,'6'])).toBe('not a digit')
})


test('Not an array', () => {
    expect(analyzeArray('12345')).toBe('not an array')
})