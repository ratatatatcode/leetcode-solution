/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let copy = x;
    let x_reversed = 0;
    let last_digit = 0;

    if (x < 0) return false;

    while (copy > 0) {
        last_digit = copy % 10;
        copy = Math.floor(copy / 10);
        x_reversed = (x_reversed * 10) + last_digit
    }
    
    if (x == x_reversed) return true;
    return false;
};