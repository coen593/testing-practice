import cipher from './caesarCipher'

test('Basic cipher', () => {
    expect(cipher('abc',1)).toBe('bcd')
    expect(cipher('bcd',2)).toBe('def')
})

test('Basic negative cipher', () => {
    expect(cipher('bcd',-1)).toBe('abc')
    expect(cipher('def',-2)).toBe('bcd')
})

test('Leaves non-letter chars', () => {
    expect(cipher('1 great test, indeed?!',3)).toBe('1 juhdw whvw, lqghhg?!')
})

test('Wraps high letter correctly lowercase', () => {
    expect(cipher('xyz', 3)).toBe('abc')
})

test('Wraps high letter correctly uppercase', () => {
    expect(cipher('XYZ', 3)).toBe('ABC')
})

test('Capitalized letters ok', () => {
    expect(cipher('Abc',1)).toBe('Bcd')
    expect(cipher('BcD',2)).toBe('DeF')
})