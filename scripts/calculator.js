const add = (a,b) => {
    return a+b
}

const subtract = (a,b) => {
    return a-b
}

function multiply(a,b) {
    return a*b
}

function divide(a,b)  {
    if (b === 0) return 'DIVIDE BY 0'
    return a/b
}

export {
    add,
    subtract,
    multiply,
    divide
}