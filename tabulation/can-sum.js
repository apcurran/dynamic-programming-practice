/**
 * Solution
 * m = targetSum
 * n = numsArr.length
 * time: O(m * n)
 * space: O(m)
 *
 * @param {number} targetSum
 * @param {number[]} numsArr
 * @returns {boolean[]}
 */
function canSum(targetSum, numsArr) {
    let table = Array(targetSum + 1).fill(false);
    // targetSum of 0 is always possible to be made by taking no vals from numsArr
    table[0] = true;

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numsArr) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
}

console.log(canSum(7, [2, 3])); // true
console.log(canSum(7, [5, 3, 4, 7])); // true
console.log(canSum(7, [2, 4])); // false
