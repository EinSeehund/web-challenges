console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars) {
    // Reset the star container before re-rendering stars
    starContainer.innerHTML = "";

    // --v-- write or modify code below this line --v--
    for (let i = 1; i <= 5; i++) {
        const newStar = document.createElement("img");
        if (filledStars >= i) {
            newStar.src = "assets/star-filled.svg";
        } else {
            newStar.src = "assets/star-empty.svg";
        }
        newStar.addEventListener("click", (event) => {
            event.preventDefault();
            renderStars(i);
        });
        starContainer.append(newStar);
    }
    // --^-- write or modify code above this line --^--
}

renderStars(0);
