import Counter from "./components/Counter";
import "./styles.css";
import { useState } from "react";

export default function App() {
    const [people, setPeople] = useState(0);

    function handleIncrement() {
        if (people >= 10) {
            alert("Maximum number of people is 10");
        } else {
            setPeople(people + 1);
        }
    }

    function handleDecrement() {
        if (people <= 1) {
            alert("Minimum number of people is 1");
        } else {
            setPeople(people - 1);
        }
    }

    return (
        <div className="container">
            <h1>Place a Table Reservation</h1>
            <Counter
                handleIncrement={handleIncrement}
                handleDecrement={handleDecrement}
            />
            <p>You are going to reserve a table for {people} people.</p>
        </div>
    );
}
