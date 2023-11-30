"use strict";

/**
 * solution 1
 * a = amount
 * c = coins array length
 * time: O(c^a)
 * space: O(a)
 * 
 * @param {number} amount 
 * @param {number[]} coins 
 * @returns {number}
 */
function minChange(amount, coins) {
    if (amount === 0) return 0;

    // not possible to make the subamount
    if (amount < 0) return -1;

    let minCoins = -1;

    for (let coin of coins) {
        const subAmount = amount - coin;
        const subCoinsCount = minChange(subAmount, coins);

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

    return minCoins;
}

console.log(minChange(4, [1, 2, 3])); // 2

