const reverseString = str => {
    if (typeof str != 'string') return 'NOT A STRING'
    return str.split('').reverse().join('')
}

export default reverseString