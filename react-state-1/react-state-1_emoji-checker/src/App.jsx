import "./styles.css";
import { useState } from "react";

export default function App() {
    const [code, setCode] = useState("");

    const validCode = "🐡🐠🐋";

    function handleClick(emoji) {
        setCode(code + emoji);
    }

    return (
        <div className="container">
            <div className="button-container">
                <button
                    type="button"
                    onClick={() => {
                        handleClick("🐡");
                    }}
                >
                    <span role="img" aria-label="Pufferfish">
                        🐡
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleClick("🐋");
                    }}
                >
                    <span role="img" aria-label="Whale">
                        🐋
                    </span>
                </button>
                <button
                    type="button"
                    onClick={() => {
                        handleClick("🐠");
                    }}
                >
                    <span role="img" aria-label="Clownfish">
                        🐠
                    </span>
                </button>
            </div>
            <span>{code}</span>
            <button
                type="button"
                onClick={() => {
                    setCode("");
                    console.log("Reset Code!");
                }}
            >
                Reset
            </button>

            {code === validCode && <p>Valid code! 🎉</p>}
        </div>
    );
}
