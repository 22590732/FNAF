// array of 10 numbers

var numbers = [1,2,3,4,5,6,7,8,9,10];

// multiplier 

var multiplier = 2;

for (var i = 0; i < numbers.length; i++) {
    numbers[i] = numbers[i] * multiplier;
}

// add all numbers

var total = 0;

for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
}