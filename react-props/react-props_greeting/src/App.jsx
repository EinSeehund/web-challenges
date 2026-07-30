export default function App() {
    return (
        <div>
            <Greeting name="my Friend" />
            <Greeting name="Roland" />
        </div>
    );
}

function Greeting({ name }) {
    return <h1>Hello, {name === "Roland" ? "Coach" : name}!</h1>;
}
