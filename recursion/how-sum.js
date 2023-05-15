"use strict";

// /**
//  * Function that returns an arr containing any combo of elems that add up to exactly the targetSum.
//  * If there is no combo that adds up to the targetSum, then return null.
//  * You may return any combo if multiples are possible.
//  * 
//  * Solution 1
//  * 
//  * m = targetSum
//  * n = numbersArr length
//  * 
//  * Time: O(n^m * m)
//  * Space: O(m)
//  * 
//  * @param {number} targetSum 
//  * @param {number[]} numbersArr 
//  * @returns {number[]|null}
//  */
// function howSum(targetSum, numbersArr) {
//     if (targetSum === 0) return [];
//     // handle negative remainder passed in as targetSum arg
//     if (targetSum < 0) return null;

//     for (let number of numbersArr) {
//         const remainder = targetSum - number;
//         const remainderResult = howSum(remainder, numbersArr);

//         if (remainderResult !== null) {
//             return [...remainderResult, number];
//         }
//     }

//     return null;
// }

/**
 * Function that returns an arr containing any combo of elems that add up to exactly the targetSum.
 * If there is no combo that adds up to the targetSum, then return null.
 * You may return any combo if multiples are possible.
 * 
 * Solution 1 -- slightly optimized, prevent copying of arrays within recursive calls
 * 
 * m = targetSum
 * n = numbersArr.length
 * 
 * Time: O(n^m)
 * Space: O(m)
 * 
 * @param {number} targetSum 
 * @param {number[]} numbersArr 
 * @returns {number[]|null}
 */
function howSum(targetSum, numbersArr) {
    if (targetSum === 0) return [];
    // handle negative remainder passed in as targetSum arg
    if (targetSum < 0) return null;

    for (let number of numbersArr) {
        const remainder = targetSum - number;
        const remainderResult = howSum(remainder, numbersArr);

        if (remainderResult !== null) {
            remainderResult.push(number);

            return remainderResult;
        }
    }

    return null;
}

// /**
//  * Function that returns an arr containing any combo of elems that add up to exactly the targetSum.
//  * If there is no combo that adds up to the targetSum, then return null.
//  * You may return any combo if multiples are possible.
//  * 
//  * Solution 2 -- memo version
//  * 
//  * m = targetSum
//  * n = numbersArr.length
//  * 
//  * Time: O(n * m)
//  * Space: O(m)
//  * 
//  * @param {number} targetSum 
//  * @param {number[]} numbersArr 
//  * @returns {number[]|null}
//  */
// function howSum(targetSum, numbersArr, memo = new Map()) {
//     // If in cache, retrieve
//     if (memo.has(targetSum)) return memo.get(targetSum);

//     if (targetSum === 0) {
//         return [];
//     } else if (targetSum < 0) {
//         return null;
//     }

//     for (let num of numbersArr) {
//         const remainder = targetSum - num;
//         const remainderResult = howSum(remainder, numbersArr, memo);

//         if (remainderResult !== null) {
//             const valArr = [...remainderResult, num];
//             // Cache arr
//             memo.set(targetSum, valArr);

//             return valArr;
//         }
//     }

//     // Cache null val
//     memo.set(targetSum, null);

//     return null;
// }

console.log( howSum(7, [5, 3, 4, 7]) ); // [3, 4] or [7]
console.log( howSum(8, [2, 3, 5]) ); // [2, 2, 2, 2] or [3, 5]
console.log( howSum(7, [2, 4]) ); // null
console.log( howSum(0, [1, 2, 3]) ); // []
console.log( howSum(300, [7, 14]) ); // (large input, needs memo version to be performant) -> null
