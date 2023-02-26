console.log("Week 3 Coding Assignment");

// Question 1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

var ages=[];
// Age
ages.push(3, 9, 23, 64, 2, 8, 28, 93); //pushes given ages to the ages array
console.log("Question 1: ",ages);

//Question 1a. Programmatically subtract the value of the first element in the array from the value in the last element of the array.
function outputAges (data){
    // console.log("dataArray", data); 
    var num1 = data[data.length-1]; // last element of array
    var num2 = data[0]; //first number of array
    return num1 - num2;
}
console.log("Question 1a:", outputAges(ages));

// Question 1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
ages.push(63);
console.log("Question 1b: ", ages, "," ,outputAges(ages));

// Question 1c.	Use a loop to iterate through the array and calculate the average age.
let sums = 0; 
for (let i = 0; i < ages.length; i += 1){
    sums += ages[i]
  }
console.log("Question 1c: ", sums/ages.length);



// Question 2. Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
const names=["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];
console.log("Question 2: ", names);

// Question 2a. Use a loop to iterate through the array and calculate the average number of letters per name. 
let total = 0;

for (let i=0; i < names.length; i++){
    total += names[i].length;
}

const average = total/names.length;
console.log("Question 2a: ", average);

// Question 2b: Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let namesConcat = ''; 
for (let i = 0; i < names.length; i++){
    namesConcat += names [i] + ' ';
}
console.log("Question 2b: ", namesConcat);

// Question 3 - How do you access the last element of an array?
console.log("Question 3: ", "data[data.length-1]");

// Question 4 - How do you access the first element of an array?
console.log("Question 4: ", "data[0]");

// Question 5 - Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

const nameLengths = [];
for (let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log("Question 5: ", nameLengths);

// Question 6 -  Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
let nameLengthsSum = 0; 

for (let i = 0; i < nameLengths.length; i++){
    nameLengthsSum += nameLengths[i];
};
console.log("Question 6: ", nameLengthsSum);

// Question 7 - Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to inself n number of times. 

const newFunction = (word, n) => {
    let result = '';
    for (let i = 0; i < n; i++) {
        result += word;
    }
    return result;
};

 console.log("Question 7: ", newFunction('Alright', 3));

// Question 8 - Write a function that takes two parameters, firstName and lastName, and returns a full name.  The full name should be the first and the last name separated by a space.

function fullName(firstName, lastName){
    return firstName + ' ' + lastName;
}
console.log("Question 8: ", fullName("Andrew", "Enis"));

// Question 9 - Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

let numberArray = [6, 18, 2, 21, 23, 12, 28, 8, 7];
let numberSum = 0; 

for (let i = 0; i < numberArray.length; i++){
    numberSum += numberArray[i];
};
// console.log(numberSum);

if (numberSum > 100) {
    console.log("Question 9: ", true);
} else {
    console.log("Question 9: ", false)
};

// Question 10 - Write a function that takes an array of numbers and returns the average of all the elements in the array.

array = [1, 2, 3, 4, 5];
let sum = 0

function calculateAverageOfArray(array) {

    for (let i = 0; i < array.length; i += 1){
      sum += array[i]
    }
    return sum / array.length;
}
console.log("Question 10: ", calculateAverageOfArray(array));

// Question 11 - Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

function twoArrays (array1, array2) {
    let num1 = 0;
    for (let i =0; i < array1.length; i++) {
        num1 += array1[i];
    };
    let num2 = 0;
    for (let i = 0; i < array2.length; i++) {
        num2 += array2[i];
    };
    let avg1 = num1 / array1.length;
    let avg2 = num2 / array2.length;

    return avg1 > avg2;
}
array1 = [1, 2, 3, 10];
array2 = [1, 2, 3, 6];

console.log("Question 11: ", (twoArrays(array1, array2)));

// Question 12 = Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink (isHotOutside, moneyInPocket){
    let getDrink = true;
    if (isHotOutside == true && moneyInPocket > 10.50){ 
        getDrink = true;
    }else{
        getDrink = false;
    }
    return getDrink;
}
console.log("Question 12: ", willBuyDrink(true, 7));

// Question 13 - Create a function of your own that solves a problem.
// Students can only be on the high school drumline if they know their rudiments and are in grade 9 or above. This function lets me know whether they can be on the drumline or not.
function onDrumline (knowsRudiments, gradeLevel){
    let onDrumline = true;
    if (knowsRudiments = true && gradeLevel >=9){
        onDrumline = true;
    } else {
        onDrumline = false;
    }
    return onDrumline
}
console.log("Question 13: ", onDrumline(true, 12)); //they know their rudiments and are in 12th grade so they can be on the drumline