"use strict";

/**
 * solution 1
 * time: O(m * n)
 * space: O(m * n)
 *
 * @param {number} rows
 * @param {number} columns
 */
function gridTraveler(rows, columns) {
    let table = Array(rows + 1)
        .fill(0)
        .map(() => Array(columns + 1).fill(0));
    table[1][1] = 1;

    for (let i = 0; i <= rows; i++) {
        for (let j = 0; j <= columns; j++) {
            const current = table[i][j];

            if (j + 1 <= columns) {
                table[i][j + 1] += current;
            }

            if (i + 1 <= rows) {
                table[i + 1][j] += current;
            }
        }
    }

    return table[rows][columns];
}

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 3
console.log(gridTraveler(3, 2)); // 3
console.log(gridTraveler(3, 3)); // 6
console.log(gridTraveler(18, 18)); // 2333606220
