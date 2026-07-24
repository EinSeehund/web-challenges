/*
Challenge 2: Validate a Username

Goal:
Throw your own errors when data is not valid.

Instructions:
1. Finish the getUsername function.
2. If username is missing, throw:
   new Error("Username is required")
3. If username is not a string, throw:
   new Error("Username must be a string")
4. If everything is valid, return the username in lowercase.

Example:
getUsername("OLeg")
// should return: "oleg"
*/

function getUsername(username) {
    // TODO: validate username and throw custom errors
    if (typeof username === "undefined") {
        throw new Error("Username is required");
    }
    if (typeof username != "string") {
        throw new Error("Username must be a string");
    }
    return username.toLowerCase();
}

try {
    console.log(getUsername("OLeg"));
    console.log(getUsername());
} catch (error) {
    console.log(error.message);
}
