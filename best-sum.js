"use strict";

// /**
//  * The function should return an arr containing the shortest combo
//  * of numbers that add up to the exact targetSum number.
//  * If there is a tie for the shortest combo,
//  * then you may return any one of the shortest combos.
//  * 
//  * Solution 1
//  * m = target sum
//  * n = numbers.length
//  * 
//  * Time: O(n^m * m)
//  * Space: O(m^2)
//  * 
//  * @param {number} targetSum
//  * @param {number[]} numbers
//  * @returns {number[]|null}
//  */
// function bestSum(targetSum, numbers) {
//     if (targetSum === 0) {
//         return [];
//     } else if (targetSum < 0) {
//         return null;
//     }

//     let shortestCombo = null;

//     for (let num of numbers) {
//         const remainder = targetSum - num;
//         const remainderCombo = bestSum(remainder, numbers);

//         if (remainderCombo !== null) {
//             const combo = [...remainderCombo, num];
//             // if the combo is shorter than the current "shortest", update it
//             if (shortestCombo === null || combo.length < shortestCombo.length) {
//                 shortestCombo = combo;
//             }
//         }
//     }

//     return shortestCombo;
// }

/**
 * The function should return an arr containing the shortest combo
 * of numbers that add up to the exact targetSum number.
 * If there is a tie for the shortest combo,
 * then you may return any one of the shortest combos.
 * 
 * Solution 2 -- memoized ver
 * m = target sum
 * n = numbers.length
 * 
 * Time: O(m^2 * n)
 * Space: O(m^2)
 * 
 * @param {number} targetSum
 * @param {number[]} numbers
 * @returns {number[]|null}
 */
function bestSum(targetSum, numbers, memo = new Map()) {
    if (memo.has(targetSum)) return memo.get(targetSum);

    if (targetSum === 0) {
        return [];
    } else if (targetSum < 0) {
        return null;
    }

    let shortestCombo = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombo = bestSum(remainder, numbers, memo);

        if (remainderCombo !== null) {
            const combo = [...remainderCombo, num];
            // if the combo is shorter than the current "shortest", update it
            if (shortestCombo === null || combo.length < shortestCombo.length) {
                shortestCombo = combo;
            }
        }
    }

    memo.set(targetSum, shortestCombo);

    return shortestCombo;
}

console.log( bestSum(7, [5, 3, 4, 7]) ); // [7]
console.log( bestSum(8, [2, 3, 5]) ); // [3, 5]
console.log( bestSum(8, [1, 4, 5]) ); // [4, 4]
console.log( bestSum(100, [1, 2, 5, 25]) ); // [25, 25, 25, 25]
