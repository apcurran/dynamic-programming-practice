"use strict";

/**
 * How many ways can you travel on a grid of m rows by n columns?
 * Movement is restricted to only right or down movements on the grid.
 * 
 * Time: O(2^m+n)
 * Space: O(m+n)
 * 
 * @param {number} m 
 * @param {number} n 
 * @returns {number}
 */
function gridTraveler(m, n) {
    // base case
    if (m === 1 && n === 1) return 1;
    // base case
    if (m === 0 || n === 0) return 0;

    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
}

console.log( gridTraveler(1, 1) ); // 1
console.log( gridTraveler(2, 3) ); // 3
console.log( gridTraveler(3, 2) ); // 3
console.log( gridTraveler(3, 3) ); // 6
