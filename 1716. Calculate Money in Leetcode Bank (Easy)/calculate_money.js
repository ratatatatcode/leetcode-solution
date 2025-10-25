/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let tracker = 1;
    let total = 0;

    for (let i = 1; i <= n; i++) {
        total += tracker;
        if (i % 7 == 0 && i != 0) tracker = tracker - 6;
        tracker++;
    }

    return total;
};