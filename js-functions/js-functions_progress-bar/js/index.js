console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
    console.log(window.scrollY);
    console.log(window.innerHeight);
    console.log(document.body.clientHeight);
    const progressInPercent =
        (100 / (document.body.clientHeight - window.innerHeight)) *
        window.scrollY;

    progressBar.style.width = `${progressInPercent}%`;
}

document.addEventListener("scroll", calculateScrollPercentage);
