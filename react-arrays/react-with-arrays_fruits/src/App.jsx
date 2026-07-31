import Card from "./components/Card";

export default function App() {
    const fruits = [
        {
            id: 1337,
            name: "🍌 Banana",
            color: "yellow",
        },
        {
            id: 2026,
            name: "🍎 Apple",
            color: "red",
        },
        {
            id: 3101,
            name: "🍇 Grapes",
            color: "purple",
        },
        {
            id: 4420,
            name: "🥝 Kiwi",
            color: "green",
        },
        {
            id: 5505,
            name: "🍊 Orange",
            color: "orange",
        },
    ];

    return (
        <>
            {fruits.map((fruit) => (
                <div key={fruit.id} className="app">
                    <Card
                        name={fruit.name}
                        colorClass={`card card--${fruit.color}`}
                    />
                </div>
            ))}
        </>
    );
}
