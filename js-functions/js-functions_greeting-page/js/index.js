console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting(hour) {
    let greeting = null;
    if (hour >= 6 && hour <= 12) {
        greeting = "Good Morning";
    } else if (hour >= 13 && hour <= 18) {
        greeting = "Good Afternoon";
    } else if (hour >= 19 && hour <= 22) {
        greeting = "Good Evening";
    } else if (hour >= 23 || hour <= 5) {
        greeting = "Good Night";
    }
    return greeting;
}

function getDayColor(day) {
    console.log(day);
    if (day === 1) {
        return "darkgray";
    } else if (day > 1 && day < 6) {
        return "lightblue";
    } else if (day === 6 || day === 0) {
        return "hotpink";
    }
}

display.textContent = getGreeting(new Date().getHours());
document.body.style.backgroundColor = getDayColor(new Date().getDay());
