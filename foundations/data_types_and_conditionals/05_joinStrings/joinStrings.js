/*
 First name: Carlos
 Last name: Stevenson
 This year: 1965
 Birth year: 1947

 The greeting should read: "Hello! My name is Paul Lee and I am 22 years old."
*/

// Add your code right below, good luck!
let firstName = "Paul";
let lastName = "Lee";
let thisYear = 2026;
let birthYear = 2004;
let age = thisYear - birthYear;
let fullName = `${firstName} ${lastName}`
let greeting = `Hello! My name is ${fullName} and I am ${age} years old.`;



// Do not change this
module.exports = {
  firstName: typeof firstName === 'undefined' ? undefined : firstName,
  lastName: typeof lastName === 'undefined' ? undefined : lastName,
  thisYear: typeof thisYear === 'undefined' ? undefined : thisYear,
  birthYear: typeof birthYear === 'undefined' ? undefined : birthYear,
  greeting: typeof greeting === 'undefined' ? undefined : greeting,
  fullName: typeof fullName === 'undefined' ? undefined : fullName,
  age: typeof age === 'undefined' ? undefined : age
}
