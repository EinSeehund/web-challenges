console.clear();

/*
Let's calculate some interesting facts based on how many years you've been practicing a skill!
The program expects the user to provide the number of years as a numerical input.
The code for receiving this input is provided below.

Calculate the following:
1. The total number of days you've been practicing (assume 365 days/year).
2. The estimated number of remaining days to reach a 10-year milestone.
3. The percentage of the milestone you've already completed.
4. The cumulative number of days you've spent practicing, assuming an average of 1 hour of practice per day.

Log each result with a clear and descriptive message. 
Hint: You can combine text and variables using the `+` operator.

💡 For simplicity, ignore leap years.
*/

const yearsPracticing = Number(process.argv[2]); // This takes the `<years>` entered in the command `node index.js <years>`.
const daysPracticing = yearsPracticing * 365;
const daysRemaining = 10 * 365 - (daysPracticing % (10 * 365));
const completedInPercent = (daysPracticing % (10 * 365)) / ((10 * 365) / 100);
const cumulativeDays = daysPracticing / 24;

console.log("You've been practicing for: " + yearsPracticing + " years");
console.log(`That is ${daysPracticing} days`);
console.log(`Your next 10-year milestone is ${daysRemaining} days away.`);
console.log(
    `You've already completed ${completedInPercent}% of the next 10-year milestone!`,
);
console.log(
    `Your pure practice time amounts to ${cumulativeDays.toFixed(2)} days!`,
);
