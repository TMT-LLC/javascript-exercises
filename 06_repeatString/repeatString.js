const repeatString = function(str, num) {
    // Need a variable that starts empy, adds 'str' to it, after 
    // loop will return the result
    // This is also known as an accumulator
    let phrase = "";

    if (num < 0) {
        return phrase += "ERROR"
    } else {

    for (let i = 0; i < num; i++){
        // i = 0 -> starts at the first index (0)
        // i < greeting -> keep looping while i is a valid index
        // i++ -> move to the next index after each loop

        // Add whatever str to empy phrase variable num times
        phrase += str
    }
    // Return ends the function/loop
    return phrase
    }
};

// Do not edit below this line
module.exports = repeatString;
