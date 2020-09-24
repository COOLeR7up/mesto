import FormValidator from './FormValidator.js'
import Card from './Card.js'
import {initialCards} from './constants.js'

const popup = document.querySelector('.popup');
const popupOpenButton = document.querySelector('.profile__edit')
const popupCloseButton = popup.querySelector('.popup__close')
const formElement = popup.querySelector('.popup__content');
const nameInput = popup.querySelector('.popup__prof-name');
const jobInput = popup.querySelector('.popup__prof-text');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');
const editPlacePopup = document.querySelector('.popup-mesto');
const openPlacePopupButton = document.querySelector('.profile__button-border');
const closePlacePopupButton = editPlacePopup.querySelector('.popup-mesto__close');
const cardFormElement = editPlacePopup.querySelector('.popup-mesto__content');
const cardFormSubmitButton = cardFormElement.querySelector('.popup-mesto__button-save');
const popupFigure = document.querySelector('.popup-img');
const popupImgCloseButton = popupFigure.querySelector('.popup-img__close');
const cardInputElement = cardFormElement.querySelector('.popup-mesto__prof-name');
const cardInputLinkEl = cardFormElement.querySelector('.popup-mesto__prof-text');


function addPlaceValidator() {
    const settingAddPlaceValidation = {
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup-mesto__button-save',
    }

    const addPlaceValidation = new FormValidator(settingAddPlaceValidation, '.popup-mesto__content')
    addPlaceValidation.enableValidation()

    return addPlaceValidation
}


function addCardValidator() {
    const settingAddCardValidation = {
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup__button-save',
    }

    const addCardValidation = new FormValidator(settingAddCardValidation, '.popup__content')
    addCardValidation.enableValidation()

    return addCardValidation
}

addPlaceValidator()
addCardValidator()


//Открывает 1 попап
const popupToggle = function () {
    if (!popup.classList.contains('popup__opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
        document.body.addEventListener('keydown', escHandlerclosepopup, {once: true});
        FormValidator.clearErrors()
    }

    popup.classList.toggle('popup__opened');
};
// Закрытие попоп фото
const popupFigureToggle = function () {
    popupFigure.classList.toggle('popup__opened');
 }
 // Закрытие попап 1
function closesPopup() {
    popup.classList.remove('popup__opened');
}

// Закрытие попап 2
function closeEditPlacePopup() {
    editPlacePopup.classList.remove('popup-mesto__opened');
}

const placePopupToggle = function () {
    editPlacePopup.classList.toggle('popup-mesto__opened');
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup__but-disabled');
    cardFormSubmitButton.classList.remove('popup__button-save');

    if (editPlacePopup.classList.value != 'popup-mesto') {
        document.body.addEventListener('keydown', escHandlerclosepopup, {once: true});
    }

    FormValidator.clearErrors()
}

// Close popups overlay all
const closePopupOverlay = (event, closePopupCallback) => {
    if (event.target !== event.currentTarget) {return}
    closePopupCallback()
    document.body.removeEventListener('keydown', escHandlerclosepopup);
}

// Close Edit place
const closePopupEditPlaceOverlay = (event) => {
    closePopupOverlay(event, closesPopup)
}

// Close card
const closePopupCardOverlay = (event) => {
    closePopupOverlay(event, closeEditPlacePopup)
}

// Close figure
const closePopupFigureOverlay = (event) => {
    closePopupOverlay(event, popupFigureToggle)
}

function formSubmitHandler (evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);

const escHandlerclosepopup = event => {
    const escCode = 27;

    if (event.keyCode === escCode) {
        closePopupEditPlaceOverlay(event)
        closePopupCardOverlay(event)
        closePopupFigureOverlay(event)
    };
}
export default escHandlerclosepopup;


function addCard(title, link) {
    const templateSelector = '.element-template'
    const card = new Card(title, link, templateSelector)

    const cardsList = document.querySelector('.element__list')

    cardsList.prepend(card.generate())
}

const formElementHandler = e => {
    e.preventDefault();
    const title = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardFormElement.reset();
    addCard(title, link)

    placePopupToggle();
}

cardFormElement.addEventListener('submit', formElementHandler)
popupOpenButton.addEventListener('click', popupToggle)
popupCloseButton.addEventListener('click', popupToggle)

popup.addEventListener('click', closePopupCardOverlay);
editPlacePopup.addEventListener('click', closePopupEditPlaceOverlay);
popupFigure.addEventListener('click', closePopupFigureOverlay);

openPlacePopupButton.addEventListener('click', placePopupToggle);
closePlacePopupButton.addEventListener('click', placePopupToggle);
popupImgCloseButton.addEventListener('click', popupFigureToggle);


// init card by default
initialCards.forEach(el => {
    addCard(el.title, el.link)
})

