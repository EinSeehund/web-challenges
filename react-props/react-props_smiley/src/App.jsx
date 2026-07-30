export default function App() {
    return (
        <div>
            <Smiley isHappy />
            <Smiley />
            <Smiley isHappy />
            <Smiley />
            <Smiley isHappy />
            <Smiley />
            <Smiley isHappy />
            <Smiley />
            <Smiley isHappy />
            <Smiley />
            <Smiley isHappy />
            <Smiley />
        </div>
    );
}

function Smiley({ isHappy }) {
    return (
        <h1>
            <span>{isHappy ? "🥳" : "☹️"}</span>
        </h1>
    );
}
