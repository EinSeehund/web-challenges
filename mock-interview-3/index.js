const stringA = "listen";
const stringB = "silent";
const stringC = "hello";
const stringD = "bellow";
const stringE = "hello";
const stringF = "lello";

function isAnagram(string1, string2) {
    // TODO: return true if string2 is an anagram of string1
    return (
        string1.split("").toSorted().join() ===
        string2.split("").toSorted().join()
    );
}

console.log(isAnagram(stringA, stringB)); // Expected: true
console.log(isAnagram(stringC, stringD)); // Expected: false
console.log(isAnagram(stringE, stringF)); // Expected: false
