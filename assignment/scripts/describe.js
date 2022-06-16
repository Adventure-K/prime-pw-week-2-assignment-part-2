// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// We create a variable called name and set it equal to the string "Dane".
// We check the value of name to see if it is equal to the string "Mary"; 
//  if so, we tell the console to print "Hi, Mary!"; 
//  if not, we tell the console to print "How do you do?"
// The console thus prints "How do you do?"

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// We create a variable named secret with the value undefined.
// We create a variable named code with the number value 123.
// We create a condition that if code is equal to the number 123, 
//  the value of secret is changed to 'super',
//  and the value of code is then multiplied by 2.
// We create a condition that if code is greater than 250,
//  the value of secret is changed to 'duper'.
// The console then prints the value of secret.
// The console thus prints 'super'.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// We define a variable named isStudent with the boolean value true.
// We define a variable named age with the number value 34.
// We define a variable named zip with the number value 55407.
// We create a compound condition that if the value of isStudent is boolean true
//  and the value of zip is greater than 80000,
//  the console prints "You're a student on the west coast!"
// If not, a compound condition follows that if the value of isStudent is boolean false
//  or the value of age is less than 30,
//  the console prints "What are your hobbies?"
// If not, a condition follows that if the value of student is boolean true,
//  the console prints "Welcome to Prime!"
// If not, the console prints "How about the weather?" 
//
// The console thus prints "Welcome to Prime!"
//

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

/*

// FIX -  instructions state colorOne should equal 'blue', not 'red'
//        instructions state colorTwo should equal 'red', not 'blue'
//        Exchange the values of these two variables

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX -  instructions state both colorOne and colorTwo should change value to 'purple'
//        Should be
//        colorOne = 'purple';
//        colorTwo = 'purple';

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

/*
let temp = 40;
const time = 4;

// FIX - Instructions state the conditions should be if temp is higher than 39 
//        and time is greater than or equal to 4.
//       Should be if (temp > 39 && time >= 4) {
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - The outputs are in the wrong place. 
// This will console log "no entry" when age is greater than or equal to minAge.
// Should be:
//  if(minAge <= age) {
//    console.log('enter');
//  } else {
//    console.log('no entry');
//  }

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

