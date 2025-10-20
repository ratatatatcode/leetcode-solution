/**
 * @param {string[]} operations
 * @return {number}
 */
var finalValueAfterOperations = function(operations) {
    let x = 0;
    const len = operations.length;

    for (let i = 0; i < len; i++) {
        if (operations[i][1] == "+") x++;
        else x--;
    }

    /*
        if (operations[i] == "X++" || operations[i] == "++X") x++;
        else x--;
    */

    return x;
};