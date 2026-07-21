console.clear();

import { getRandomColor } from "./utils/randomColor.js";
import createCircle from "./components/Circle/Circle.js";
import createSquare from "./components/Square/Square.js";
import createPentagon from "./components/Pentagon/Pentagon.js";

const root = document.getElementById("root");

const circleElement = createCircle(getRandomColor);
const squareElement = createSquare(getRandomColor);
const PentagonElement = createPentagon(getRandomColor);

root.append(circleElement, squareElement, PentagonElement);
