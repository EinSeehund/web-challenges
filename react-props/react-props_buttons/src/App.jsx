export default function App() {
    function handleClick() {
        alert(`You clicked a button!`);
    }
    return (
        <div>
            <Button text="Let's go!" color="lightgreen" onClick={handleClick} />
            <Button text="Cancel" color="red" onClick={handleClick} />
            <Button
                text="Not available..."
                color="lightgray"
                onClick={handleClick}
                disabled
            />
        </div>
    );
}

function Button({ color, disabled, text, onClick }) {
    return (
        <button
            style={{ backgroundColor: color }}
            disabled={disabled ? true : false}
            onClick={onClick}
        >
            {text}
        </button>
    );
}
