// This is what a function looks like:

var divideByThree = function (number) {
    var val = number / 3;
    console.log(val);
};

// On line 12, we call the function by name
// Here, it is called 'dividebythree'
// We tell the computer what the number input is (i.e. 6)
// The computer then runs the code inside the function!
divideByThree(6);

// Write your function starting on line 15
var perimeterBox = function(length, width)
{
    return length + length + width + width;
};

console.log(perimeterBox(2,3));

// Global vs Local Variables
var my_number = 7; //this has global scope

var timesTwo = function(number) {
   var my_number = number * 2;
    console.log("Inside the function my_number is: ");
    console.log(my_number);
};

timesTwo(7);

console.log("Outside the function my_number is: ");
console.log(my_number);
