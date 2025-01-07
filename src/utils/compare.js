/**
 * @description compare value with 0
 * @param {number} value
 * @returns {number}
 */ 
export const compareZero = (value) => {
    return compare(value, 0);
};

/**
 * @description compare two values
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
export const compare = (a, b) => {
    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    return 0;
};
