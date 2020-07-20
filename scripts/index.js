const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit')
const popupCloseButton = popup.querySelector('.popup__close')
const formElement = popup.querySelector('.popup__content');
const nameInput = popup.querySelector('.popup__prof-name');
const jobInput = popup.querySelector('.popup__prof-text');
const profFormSubmitButton = popup.querySelector('.popup__button-save');
let profName = document.querySelector('.profile__name');
let profText = document.querySelector('.profile__text');
const cardsList = document.querySelector('.element__list');
const cardTemplateElement = document.querySelector('.element-template');
const editPlacePopup = document.querySelector('.popup-mesto');
let openPlacePopupButton = document.querySelector('.profile__button-border');
const closePlacePopupButton = editPlacePopup.querySelector('.popup__close');
const cardFormElement = editPlacePopup.querySelector('.popup__content');
const cardInputElement = cardFormElement.querySelector('.popup__prof-name');
const cardInputLinkEl = cardFormElement.querySelector('.popup__prof-text');
const cardFormSubmitButton = cardFormElement.querySelector('.popup__button-save');

initialCards.forEach(function(element) {
    addCards(element.name, element.link);
});

//Открывает 1 попап
const popupToggle = function (event) {
    if (!popup.classList.contains('popup__opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
    }
    popup.classList.toggle('popup__opened');
};

const popupFigureToggle = function () {
    popupFigure.classList.toggle('popup__opened');
}

const placePopupToggle = function () {
    editPlacePopup.classList.toggle('popup__opened');
}


//закрытие попапов на оверлей.
const closePopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    popupToggle();
}

const closePlacePopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    placePopupToggle();
}

const closeFigurePopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    popupFigureToggle();
}

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    
    popupToggle()
}

formElement.addEventListener('submit', formSubmitHandler);

function addCards(name, link) {
    const card = cardTemplateElement.content.cloneNode(true); 
    card.querySelector('.element__deletebut').addEventListener('click', deleteCard);
    card.querySelector('.element__text').textContent = name;
    card.querySelector('.element__foto').alt = name;
    card.querySelector('.element__foto').src = link;
    cardsList.prepend(card);
}

function deleteCard(event) {
    const card = event.target.closest('.element__group');
    card.remove();
}

const figureFoto = document.querySelectorAll('.element__foto');
const popupFigure = document.querySelector('.popupimg');
let popupImgText = popupFigure.querySelector('.popupimg__name');
let popupImgFoto = popupFigure.querySelector('.popupimg__foto');
const popupImgCloseButton = popupFigure.querySelector('.popup__close');
const socialLike = document.querySelectorAll('.element__social-like');

figureFoto.forEach((activeFoto) => {
    activeFoto.addEventListener('click', (evt) => {
        const figureFotoTarget = evt.target;
        popupFigure.classList.toggle('popup__opened');
        popupImgFoto.src = figureFotoTarget.src;
        const figureCard = figureFotoTarget.closest('.element__group');
        popupImgText.textContent = figureCard.querySelector('.element__text').textContent;
        
    });
});

socialLike.forEach((activButton) => {
    activButton.addEventListener('click', (evt) => {
        const socialLikeTarget = evt.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');

    });
});

document.body.addEventListener('keyup', function (e) {
    if (e.keyCode == 27) {
        popup.classList.remove('popup__opened');
    };
    if (e.keyCode == 27) {
        editPlacePopup.classList.remove('popup__opened');
    };
    if (e.keyCode == 27) {
        popupFigure.classList.remove('popup__opened');
    };

}, false);

cardFormElement.addEventListener('submit', e => {
    e.preventDefault();
    const name = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardFormElement.reset();
    addCards(name, link);
    placePopupToggle();
    
})



popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)
popup.addEventListener('click', closePopupOverlay);
editPlacePopup.addEventListener('click', closePlacePopupOverlay);
openPlacePopupButton.addEventListener('click', placePopupToggle);
closePlacePopupButton.addEventListener('click', placePopupToggle);
popupImgCloseButton.addEventListener('click', popupFigureToggle);
popupFigure.addEventListener('click', closeFigurePopupOverlay);





