export function CardList(Card, cards) {
    const cardList = document.createElement("section");
    cardList.classList.add("card-list");

    cards.forEach((card) => {
        const cardElement = Card(card, cards);
        cardList.append(cardElement);
    });

    return cardList;
}
