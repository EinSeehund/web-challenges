import "./styles.css";

export default function App() {
    return <MyArticle />;
}

function MyArticle() {
    return (
        <article className="article">
            <h2 className="article__title">Hello World!</h2>
            <label htmlFor="my-input">Enter your name:</label>
            <input id="my-input"></input>
            <a
                href="https://isitchristmas.today/"
                rel="noreferrer"
                target="_blank"
            >
                Is it Christmas today?
            </a>
        </article>
    );
}
