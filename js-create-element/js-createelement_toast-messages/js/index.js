console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
    // Exercise: Append a new entry to the toast messages container
    const newToast = document.createElement("li");
    newToast.classList.add("toast-container__message");
    newToast.textContent = "To alcohol!";
    toastContainer.append(newToast);
});

clearButton.addEventListener("click", () => {
    toastContainer.innerHTML = "";
});
