"use strict";

/**
 * Function that returns an arr containing any combo of elems that add up to exactly the targetSum.
 * If there is no combo that adds up to the targetSum, then return null.
 * You may return any combo if multiples are possible.
 * 
 * @param {number} targetSum 
 * @param {number[]} numbersArr 
 * @returns {number[]|null}
 */
function howSum(targetSum, numbersArr) {
    
}

console.log( howSum(7, [5, 3, 4, 7]) ); // [3, 4] or [7]
console.log( howSum(8, [2, 3, 5]) ); // [2, 2, 2, 2] or [3, 5]
console.log( howSum(7, [2, 4]) ); // null
console.log( howSum(0, [1, 2, 3]) ); // []
