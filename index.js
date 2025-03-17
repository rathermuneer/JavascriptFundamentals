// ULTIMATE JAVASCRIPT PART 1: FUNDAMENTALS

// This is my first JavaScript code!
// console.log('Hello World');

// Separation Of Concerns.
// Node: is a runtime environment for executing JavaScript code.

// BASICS:

// 1. Variables:
  // By default the value of variables in JS is undefined.
  // In the below example, we have declared a variable name and assigned the value of Muneer to it.
  // let name = 'Muneer';
  // console.log(name);

  // Naming rules:
    // 1. They cannot be a reserved keyword.
    // 2. Should be meaningful name.
    // 3. Cannot start with a number.
    // 4. Cannot contain space or hyphen (-).
    // 5. Are case-sensitive.

    // let firstName = 'Rather';
    // let lastName = 'Muneer';
    // console.log(firstName, lastName);


// 2. Constants:
  // The value of a constant doesn't change.
  // We cannot re-assign the value of a constant, as seen in the example below.
    // const interestRate = 0.3;
    // interestRate =1 ;
    // console.log(interestRate);


// 3. Primitive Types: also called value types.
  // String
  // let  name = 'Muneer'; // String Literal

  // Number
    // let age = 30; // Number Literal

  // Boolean: can be either true or false.
    // let isApproved = true // Boolean Literal.

  // undefined
    // let firstName = undefined;

  // null
    // let selectedColor = null; // We use null in situations where we want to explicitly clear the value of a variable.


// 4. Dynamic Typing: JS is a dynamic language, meaning the types of the variables is determined at the time of runtime, based on the values we assign to them.
    // console.log(typeof name);
    // console.log(typeof 13);

// Reference Types:
  // 1. Objects.
  // 2. Array.
  // 3. Functions.


// 5. Objects: an object in JS or in other programming languages is like an object in real life.

    // let person = { // called object literal, inside of this we add key:value pairs. The keys are called properties of this object
    // name: 'Muneer',
    // age: 30
    // };

// Dot Notation.
  // person.name = 'Rather';

// Bracket Notation
  // person['name'] = 'Haq';

// console.log(person);


// 6. Arrays: An Array in JS is an object. An Array is a Data Structure that we use to represent a list of items.

// let selectedColors = ['red', 'blue']; // Called Array literals.
// selectedColors[2] = 'green';
// selectedColors[2] = 2;

// console.log(selectedColors);


// 7. Functions: is basically a set of statements that performs a task or calculates a value.

// function greet(name, lastName) { // Body of the function. This greet function has one parameter called name and this name is like a variable which is meaningful only inside of this function.
// console.log('Hello ' + name + ' ' + lastName);
// }

// greet('John', 'Smith'); // While calling the greet function, we need to pass in the value for the name parameter. We can call John is an argument to the greet function.
// greet('Mary');


// 8. Types of Functions:

  // Performs a Task.
  // function greet(name, lastName) {
  //   console.log('Hello ' + name + ' ' + lastName);
  // }


  // Calculating a value
  // function square(number) {
  // return number * number;
  // }

  // let number = square(2);
  // console.log(number);


// OPERATORS:

// 1. Arithmetic Operators:
  // expression is something which produces a value.
// let x =10;
// let y = 20;
// console.log(x+y);
// console.log(x-y);
// console.log(x/y);
// console.log(x*y);
// console.log(x%y);
// console.log(x**y);

// Increment (++)
// console.log(++x);
// console.log(x++);
// console.log(x);

// Decrement (--)
// console.log(x--);
// console.log(--x);
// console.log(x);


// 2. Assigment Operators:
// let x = 10;
//  x = x + 5;
//  x += 5;

//  x = x * 3;
//  x *= 3;


// 3. Comparison Operators:
// let x = 1;

// Relational
// console.log(x > 0);
// console.log(x >= 1);
// console.log(x < 1);
// console.log(x <= 1);

// Equality
// console.log(x === 1);
// console.log(x !== 1);


// 4. Equality Operators:
  // Strict Equality (Value + Type)
  // console.log(1 === 1);
  // console.log('1' === 1);

  // Lose Equality (Value and then converts the value of left hand to match that of right hand side)
  // console.log(1 == 1);
  // console.log('1' == 1);
  // console.log(true == 1);

// 5. Ternary Opearator: also called conditional operator

  // If a customer has more than 100 points
  // they are a 'gold' customer, otherwise,
  // they are a 'silver' customer.

  // let points = 110;
  // let type = points > 100 ? 'gold' : 'silver';
  // console.log(type);

// 6. Logical Operators: we use these operators to make decisions based on multiple consitions.
  // Logical AND (&&)
  // Returns TRUE if both operands are TRUE.
  // console.log(true && true);
  // console.log(false && true);

  // let highIncome = true;
  // let goodCreditScore = true;
  // let eligibleForLoan = highIncome && goodCreditScore;

  // console.log(eligibleForLoan);

  // Logical OR (||)
  // Returns TRUE if one of the operands is TRUE.
  // let highIncome = true;
  // let goodCreditScore = true;
  // let eligibleForLoan = highIncome || goodCreditScore;

  // console.log(eligibleForLoan);

  // Logical NOT (!).
  // let highIncome = false;
  // let goodCreditScore = false;
  // let eligibleForLoan = highIncome || goodCreditScore;
  // console.log('Eligible', eligibleForLoan);

  // let applicationRefused = !eligibleForLoan;
  // console.log('Application Refused', applicationRefused);

// 7. Logical Operators with Non-booleans.
// Falsy (false)
// undefined
// null
// 0
// flase
// ''
// NaN
//  false || true
//  false || Muneer
//  false || 1


// Anything that is not Falsy -> Truthy


// Short- circuiting
// false || 1 || 2

// let userColor = 'Red';
// let defaultColor = 'blue';
// let currentColor = userColor || defaultColor;
// console.log(currentColor);

// 8. Bitwise operators

// Swapping variables.
//  let a = 'red';
//  let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);

// CONTROL FLOW
// 1. if else
  // Hour
  // If hour is between 6am and 12pm; Good morning!.
  // If it is between 12pm and 6pm: Good afternoon!.
  // Otherwise: Good evening!.

  // let hour = 10;

  // if (hour >= 6 && hour < 12 )  {
  //   console.log('Good morning');
  // }
  // else if (hour >= 12 && hour < 18) {
  //   console.log('Good Afternoon');
  // }
  // else
  // console.log('Good evening');

// 2. Switch case

// let role = 'guest';

  // switch(role) {
  //   case  'guest':
  //     console.log('Guest User');
  //     break;

  //   case 'moderator':
  //     console.log('Moderate User');
  //     break;

  //     default:
  //       console.log('Unknown User');
  // }

// LOOPS: repeat an action 'n' number of times.
// 3. For Loop
// We need three statements for the FOR loop to work.
// for (initialExpression, condition, IncrementExpression)
for (let i = 0; i < 5; i++ )
  console.log('Hello World', i);

