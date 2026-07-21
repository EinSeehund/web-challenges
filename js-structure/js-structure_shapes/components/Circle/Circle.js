export default function Circle(changeColor) {
    const circle = document.createElement("div");
    circle.classList.add("circle");
    circle.addEventListener("click", () => {
        circle.style.backgroundColor = changeColor();
    });
    return circle;
}
