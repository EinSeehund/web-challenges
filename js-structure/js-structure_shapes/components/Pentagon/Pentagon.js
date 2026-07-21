export default function Pentagon(changeColor) {
    const pentagon = document.createElement("div");
    pentagon.classList.add("pentagon");
    pentagon.addEventListener("click", () => {
        pentagon.style.backgroundColor = changeColor();
    });
    return pentagon;
}
