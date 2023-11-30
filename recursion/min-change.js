"use strict";

// /**
//  * solution 1
//  * a = amount
//  * c = coins array length
//  * time: O(c^a)
//  * space: O(a)
//  * 
//  * @param {number} amount 
//  * @param {number[]} coins 
//  * @returns {number}
//  */
// function minChange(amount, coins) {
//     if (amount === 0) return 0;

//     // not possible to make the subamount
//     if (amount < 0) return -1;

//     let minCoins = -1;

//     for (let coin of coins) {
//         const subAmount = amount - coin;
//         const subCoinsCount = minChange(subAmount, coins);

//         if (subCoinsCount !== -1) {
//             // it is possible to make subamount
//             const numOfCoins = subCoinsCount + 1;

//             // if numOfCoins is smaller than current minCoins OR
//             // minCoins still has default value of -1
//             // update minCoins
//             if (numOfCoins < minCoins || minCoins === -1) {
//                 minCoins = numOfCoins;
//             }
//         }
//     }

//     return minCoins;
// }

/**
 * solution 2 -- hashmap cache
 * a = amount
 * c = coins array length
 * time: O(a * c)
 * space: O(a)
 * 
 * @param {number} amount 
 * @param {number[]} coins 
 * @param {Map=} cache
 * @returns {number}
 */
function minChange(amount, coins, cache = new Map()) {
    if (amount === 0) return 0;

    // not possible to make the subamount
    if (amount < 0) return -1;

    // check if value is in cache
    if (cache.has(amount)) {
        return cache.get(amount);
    }

    let minCoins = -1;

    for (let coin of coins) {
        const subAmount = amount - coin;
        const subCoinsCount = minChange(subAmount, coins, cache);

        if (subCoinsCount !== -1) {
            // it is possible to make subamount
            const numOfCoins = subCoinsCount + 1;

            // if numOfCoins is smaller than current minCoins OR
            // minCoins still has default value of -1
            // update minCoins
            if (numOfCoins < minCoins || minCoins === -1) {
                minCoins = numOfCoins;
            }
        }
    }

    // add value to cache
    cache.set(amount, minCoins);

    return minCoins;
}

console.log(minChange(4, [1, 2, 3])); // 2
console.log(minChange(5, [1, 2, 3])); // 2

