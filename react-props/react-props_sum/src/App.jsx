export default function App() {
    return (
        <div>
            <Sum valueA={2} valueB={3} />
            <Sum valueA={4} valueB={65} />
            <Sum valueA={45} valueB={78} />
            <Sum valueA={4321} valueB={6456} />
            <Sum valueA={456456} valueB={456456} />
        </div>
    );
}

function Sum({ valueA, valueB }) {
    return (
        <h1>
            {valueA} + {valueB} = {valueA + valueB}
        </h1>
    );
}
