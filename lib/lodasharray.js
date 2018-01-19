module.exports.concat = (...args) => {
    let concatinated = [];
    for (let i = 0; i < args.length; i++) {
        if (Array.isArray(args[i])) {
            for (let y = 0; y < args[i].length; y++) {
                concatinated.push(args[i][y]);
            }
        } else {
            concatinated.push(args[i]);
        }
    }
    return concatinated;
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

module.exports.range = (bound1, bound2) => {
    let range = [];
    if (!isNaN(bound1) && typeof bound1 === 'number'
        && !isNaN(bound2) && typeof bound2 === 'number') {
            if (bound1 <= bound2) {
                for (let i = bound1; i <= bound2; i++) {
                    range.push(i);
                }
            } else if (bound1 > bound2) {
                for (let i = bound1; i >= bound2; i--) {
                    range.push(i);
                }
            }
            return range;
        } else if (bound1 == undefined || bound2 == undefined) {
            let lonelyBound = bound1 === undefined ? bound2 : bound1;
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

module.exports.remove = (array, iteratee) => {
    let newArr = [];
    if (Array.isArray(array) && typeof iteratee === 'function') {
        for (let i = 0; i < array.length; i++) {
            if (!iteratee(array[i])) {
                newArr.push(array[i]);
            }
        }
        return newArr;
    }
    return undefined;
}

/**
 * TODO:
 * shuffle
 */
