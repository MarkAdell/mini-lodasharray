const _ = require('mini-lodashmath');

module.exports.concat = (...args) => {
    let result = [];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            for (let y = 0; y < args[i].length; y++) {
                result.push(args[i][y]);
            }
        } else {
            result.push(args[i]);
        }
    }
    return result;
}

module.exports.uniq = array => {
    if (!Array.isArray(array)) {
        return undefined;
    }
    let uniqueArr = [];
    let exists = {};
    for (let i = 0; i < array.length; i++) {
        if (!exists[array[i]]) {
            uniqueArr.push(array[i]);
            exists[array[i]] = true;
        }
    }
    return uniqueArr;
}

module.exports.range = (start, end) => {
    let range = [];
    if (!isNaN(start) && typeof start === 'number'
        && !isNaN(end) && typeof end === 'number') {
            if (start <= end) {
                for (let i = start; i <= end; i++) {
                    range.push(i);
                }
            } else if (start > end) {
                for (let i = start; i >= end; i--) {
                    range.push(i);
                }
            }
            return range;
        } else if (start == undefined || end == undefined) {
            let lonelyBound = start === undefined ? end : start;
            if (lonelyBound >= 0) {
                for (let i = 0; i <= lonelyBound; i++) {
                    range.push(i);
                }
            } else {
                for (let i = 0; i >= lonelyBound; i--) {
                    range.push(i);
                }
            }
            return range;
        }
    return [];
}

module.exports.remove = (array, predicate) => {
    let result = [];
    if (Array.isArray(array) && typeof predicate === 'function') {
        for (let i = 0; i < array.length; i++) {
            if (!predicate(array[i])) {
                result.push(array[i]);
            }
        }
        return result;
    }
    return undefined;
}

module.exports.shuffle = array => {
    if (Array.isArray(array)) {
        let result = array.slice(0);
        for (let i = result.length - 1; i > 0; i--) {
            let randIndex = _.random(i);
            let temp = result[i];
            result[i] = result[randIndex];
            result[randIndex] = temp;
        }
        return result;
    }
    return undefined;
}

