/*
Challenge 3: Parse and Validate a Product

Goal:
Combine try/catch with throw new Error(...).

Instructions:
1. Finish the formatProduct function.
2. Parse the incoming JSON string.
3. If the JSON is invalid, catch the parsing error and return:
   "Could not read product data"
4. After parsing, check the object:
   - if name is missing, throw new Error("Product name is missing")
   - if price is missing, throw new Error("Product price is missing")
5. If everything is valid, return this string:
   "<name>: $<price>"

Example:
formatProduct('{"name":"Keyboard","price":25}')
// should return: "Keyboard: $25"
*/

function formatProduct(productJSON) {
    // TODO: parse JSON, validate fields, and handle errors
    let data = null;
    try {
        data = JSON.parse(productJSON);
    } catch (error) {
        return "Could not read product data";
    }
    if (!data.hasOwnProperty("name")) {
        throw new Error("Product name is missing");
    }
    if (!data.hasOwnProperty("price")) {
        throw new Error("Product price is missing");
    }
    return `${data.name}: $${data.price}`;
}

try {
    console.log(formatProduct('{"name":"Keyboard","price":25}'));
    //console.log(formatProduct('{"price":25}'));
    console.log(formatProduct("not json"));
} catch (error) {
    console.log(error.message);
}
