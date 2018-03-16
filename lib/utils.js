const areNumbers = numbers => {
    return !!numbers && !!numbers.length && numbers.every(item => typeof item === 'number');
}

module.exports = {
    areNumbers
}