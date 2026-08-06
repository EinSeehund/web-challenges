const words = ["Inception", "Jaws", "Up", "Alien", "Gravity", "Psycho"];

function findLongestWord(words) {
    // TODO: return the longest word

    // Variable = leerer String
    let result = "";

    // Jeden String einzeln anschauen
    // ist der string länger als meine Variable?
    // wenn ja variable = string, wenn nein mach gar nichts

    // VARIANTE 1
    // words.forEach((word) => {
    //     if (word.length > result.length) {
    //         result = word;
    //     }
    // });

    // VARIANTE 2
    // for (let i = (words.length - 1); i >= 0; i--) {
    // if (words[i].length > result.length) {
    //         result = words[i];
    //     }
    // }

    // VARIANTE 3
    for (const word of words) {
        if (word.length > result.length) {
            result = word;
        }
    }

    // return Variable
    return result;
}

console.log(findLongestWord(words));
