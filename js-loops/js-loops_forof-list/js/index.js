console.clear();

const main = document.querySelector('[data-js="main"]');

const ol = document.createElement("ol");
main.append(ol);

const programmingLanguages = [
    "JavaScript",
    "Python",
    "Java",
    "C#",
    "C++",
    "PHP",
    "Ruby",
];

// --v-- write or modify code below this line --v--
for (const lang of programmingLanguages) {
    const newListItem = document.createElement("li");
    newListItem.textContent = lang;
    ol.append(newListItem);
}
// --^-- write or modify code above this line --^--
