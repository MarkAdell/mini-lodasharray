module.exports.concat = (array1, array2) => {
    if (Array.isArray(array1) && array2 === undefined) {
        return array1;
    } else if (Array.isArray(array1) && Array.isArray(array2)) {
        for (let i = 0; i < array2.length; i++) {
            array1.push(array2[i]);
        }
        return array1;
    }
    return undefined;
}

/**
 * TODO: 
 * uniq
 * range
 * shuffle
 * remove
 */