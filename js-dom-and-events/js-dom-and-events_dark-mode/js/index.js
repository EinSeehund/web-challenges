console.clear();

const bodyElement = document.querySelector('[data-js="body"]');
const buttonDarkMode = document.querySelector('[data-js="dark-mode-button"]');
const buttonLightMode = document.querySelector('[data-js="light-mode-button"]');
const butttonToggle = document.querySelector('[data-js="toggle-button"]');

buttonDarkMode.addEventListener("click", () => {
    bodyElement.classList.add("dark");
});

buttonLightMode.addEventListener("click", () => {
    bodyElement.classList.remove("dark");
});

butttonToggle.addEventListener("click", () => {
    bodyElement.classList.toggle("dark");
});
