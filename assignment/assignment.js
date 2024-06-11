// problem number-1

const number1 = 10
const number2 = 20;

if (number1 > number2) {
    console.log(`${number1} is the maximum number`);
} else {
    console.log(`${number2} is the minimum number`);
}

// problem no -2
const weathers = 0;

if (weathers > 0) {
    console.log(`waether number is positive`);
}
else if (weathers == 0) {
    console.log(`weather number is zero`);
} else {
    console.log(`weather number is negative`);
}
// problem no-3 ///

const numbers = 17;

if (numbers % 10 == 0) {
    console.log(`${numbers} is divisible `)
}else{
    console.log(`${numbers} is not divisible `)  
}



// problem nimber-4 //

const weather = 28;

if (weather % 2 == 0 ) {
    console.log(`weather is even `);
}else{
    console.log(`weather is odd `);
}

// problem number-5 // 

const weather1 = "29";
const lowerCaseChar = weather1.toLowerCase();

if (lowerCaseChar >= "a" && lowerCaseChar <= "z") {
    console.log(`weather is a alphabet`);
} else {
    console.log(`weather is a not alphabet`)
}

// problem no-6//

// varible man upore teke niya hoise//

if ( weather >= 30) {
    console.log(`weather is hot`)
} else if ( weather <= 25 ){
    console.log(`weather is cold`);
}else{
    console.log(`weather is Normal;`)
}

// problem no-7 //

const num1 = 10;
const num2 =30;
const num3 = 20;

if ( num1 > num2 && num1 > num3) {
    console.log(`${num1} 1is maximum number`)
}
else if ( num2 > num1 && num2 > num3) {
    console.log(`${num2}  is maximum number`)
}
else {
    console.log(`${num3}  is maximum number`)
}

// problem no-8//

const x = 20;
const result = x % 2 === 0 ? "Even Numver" : "Odd Number";
console.log(result);

// problem no -9 //

const numOne = 10;
const numTwo = 20;

if (numOne > 30) {
    console.log(`numOne is not grater than 30`)
}
else if (numTwo > 30) {
    console.log(`numTne is not grater than 30`)
}
else{
    console.log(`30  grater than onw or two`)
}

// problem no -10 //

const age = 15;

if ( age > 13 && age < 19) {
    console.log("Teenager");
}else{
    console.log("Not Teenager");
}