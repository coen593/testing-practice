const analyzeArray = arr => {
    if (!Array.isArray(arr)) return 'not an array'
    if (arr.filter(n => typeof n !== 'number').length > 0) return 'not a digit'
    return {
        average: arr.reduce((p,c) => p + c, 0) / arr.length,
        min: Math.min(...arr),
        max: Math.max(...arr),
        length: arr.length
    }
}

export default analyzeArray