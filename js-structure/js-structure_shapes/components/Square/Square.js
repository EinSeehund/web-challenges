export default function Square(changeColor) {
    const square = document.createElement("div");
    square.classList.add("square");
    square.addEventListener("click", () => {
        square.style.backgroundColor = changeColor();
    });
    return square;
}
