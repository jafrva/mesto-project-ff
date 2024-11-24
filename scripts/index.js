// Темплейт карточки и DOM узлы
const placesList = document.querySelector('.places__list');
const cardTemplate = document.querySelector('#card-template').content;
const placeItem = cardTemplate.querySelector('.places__item'); //ищем элемент с тегом places__item

// Функция создания карточки
function createCard(cardName, cardLink, deleteCard) {
    const cardElement = placeItem.cloneNode(true); // клонируем элемент
    
    cardElement.querySelector('.card__title').textContent = cardName;
    cardElement.querySelector('.card__image').src = cardLink;
    
    const deleteButton = cardElement.querySelector('.card__delete-button'); // выбираем кнопку удаления
    deleteButton.addEventListener('click', function() {
        deleteCard(cardElement);
    });
    return cardElement;
}

// Функция удаления карточки
function deleteCard (cardElement) {
    cardElement.remove();
}

// Вывести карточки на страницу
initialCards.forEach(card => {
    const currentCard = createCard(card.name, card.link, deleteCard);
    placesList.append(currentCard);
});