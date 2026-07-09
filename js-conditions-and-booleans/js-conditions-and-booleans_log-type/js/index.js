let dataType = null;
const data = [];

if (isNaN(data)) {
    dataType = "not a number!";
} else if (data === null) {
    dataType = "null!";
} else if (Array.isArray(data)) {
    dataType = "array!";
} else {
    switch (typeof data) {
        case "undefined":
            dataType = "undefined!";
            break;
        case "null":
            dataType = "null!";
            break;
        case "number":
            dataType = "number!";
            break;
        case "NaN":
            dataType = "not a number!";
            break;
        case "string":
            dataType = "string!";
            break;
        case "boolean":
            dataType = "boolean!";
            break;
        case "function":
            dataType = "function!";
            break;
        case "object":
            dataType = "object!";
            break;
        case "array":
            dataType = "array!";
            break;
        default:
            dataType = "I have no idea!";
    }
}

console.log(dataType);
