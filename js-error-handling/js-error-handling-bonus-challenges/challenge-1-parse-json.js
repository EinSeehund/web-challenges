/*
Challenge 1: Safe JSON Parser

Goal:
Use try/catch to safely parse a JSON string.

Instructions:
1. Finish the parseUserData function.
2. If the JSON is valid, return the parsed object.
3. If the JSON is invalid, catch the error and return the string:
   "Invalid JSON data"
4. Inside catch, also log the error message.

Example:
parseUserData('{"name":"Oleg"}')
// should return: { name: "Oleg" }

parseUserData('{name:"Oleg"}')
// should return: "Invalid JSON data"
*/

function parseUserData(jsonString) {
    // TODO: use try/catch with JSON.parse
    try {
        return JSON.parse(jsonString);
    } catch (error) {
        console.log(error.message);
        return "Invalid JSON data";
    }
}

console.log(parseUserData('{"name":"Oleg"}'));
console.log(parseUserData('{name:"Oleg"}'));
