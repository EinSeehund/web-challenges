export function App(Header, Form, handleFormSubmit, CardList, Card, cards) {
    const app = document.createElement("main");
    app.classList.add("app");
    app.append(Header(), Form(handleFormSubmit), CardList(Card, cards));

    return app;
}
