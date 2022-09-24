const reverseString = function(str) {
    let arrLetters = str.split("");
    arrLetters.reverse();

    return arrLetters.join("");
};

// Do not edit below this line
module.exports = reverseString;
