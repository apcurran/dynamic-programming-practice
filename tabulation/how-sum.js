"use strict";

/**
 * Solution
 * m = targetSum
 * n = numsArr.length
 * time: O(m^2 * n)
 * space: O(m^2)
 * 
 * @param {number} targetSum 
 * @param {number[]} numsArr 
 * @returns {number[]}
 */
function howSum(targetSum, numsArr) {
    let table = Array(targetSum + 1).fill(null);
    // Base case, as a targetSum of 0 can always be generated by not taking any nums
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            // Amt i is able to be generated
            for (let num of numsArr) {
                table[i + num] = [...table[i], num];
            }
        }
    }

    return table[targetSum];
}

console.log( howSum(7, [2, 3]) ); // [3, 2, 2]
console.log( howSum(7, [5, 3, 4, 7]) ); // [4, 3]
console.log( howSum(7, [2, 4]) ); // null
