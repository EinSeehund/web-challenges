console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";

console.log(
    SUPER_SECRET_PASSWORD === receivedPassword
        ? "Welcome! You are logged in as Brunhilde1984"
        : "Access denied!",
);

// Part 2: Even / Odd
const number = 6;
console.log(number % 2 === 0 ? "even number" : "odd number");

// Part 3: Hotdogs
const numberOfHotdogs = 42;
let pricePerUnit = null;
let total = null;

if (numberOfHotdogs < 5) {
    pricePerUnit = 2;
    total = numberOfHotdogs * pricePerUnit;
} else if (numberOfHotdogs >= 5 && numberOfHotdogs < 100) {
    pricePerUnit = 1.5;
    total = numberOfHotdogs * pricePerUnit;
} else if (numberOfHotdogs >= 100 && numberOfHotdogs < 1000000) {
    pricePerUnit = 1;
    total = numberOfHotdogs;
} else if (numberOfHotdogs >= 1000000) {
    pricePerUnit = 0.1;
    total = numberOfHotdogs * pricePerUnit;
}

console.log(`
    Price per Hot Dog: ${pricePerUnit} EUR
    Total: ${total} EUR
    `);

// Part 4: Daytime
const currentHour = 12;

const statement = currentHour < 17 ? "Still need to learn..." : "Partytime!";

console.log(statement);

// Part 5: Greeting
const userName = "Archibald";

const greeting = "Hello " + (userName === "Feline" ? "Coach" : userName) + "!";

console.log(greeting);
