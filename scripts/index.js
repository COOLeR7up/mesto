import FormValidator from './FormValidator.js'
import Card from './Card.js'
import {initialCards, popupImgCloseButton} from './constants.js'



const infoPopup = document.querySelector('.popup');
// Открытие info popup
const openButtonInfoPopup = document.querySelector('.profile__edit')
// Закрытие info popup
const closeButtonInfoPopup = infoPopup.querySelector('.popup__close')


const formElement = infoPopup.querySelector('.popup__content');
const nameInput = infoPopup.querySelector('.popup__prof-name');
const jobInput = infoPopup.querySelector('.popup__prof-text');
const profName = document.querySelector('.profile__name');
const profText = document.querySelector('.profile__text');


const cardAddPopup = document.querySelector('.popup-mesto');
// Открытие card popup
const openButtonCardAddPopup = document.querySelector('.profile__button-border');
// Закрытие card popup
const closeButtonCardAddPopup = cardAddPopup.querySelector('.popup-mesto__close');

const cardFormElement = cardAddPopup.querySelector('.popup-mesto__content');


const cardFormSubmitButton = cardFormElement.querySelector('.popup-mesto__button-save');
const popupFigure = document.querySelector('.popup-img');
const cardInputElement = cardFormElement.querySelector('.popup-mesto__prof-name');
const cardInputLinkEl = cardFormElement.querySelector('.popup-mesto__prof-text');
const cardsList = document.querySelector('.element__list')

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


// ====- Popups -====


//      Открытие:


function openInfoPopup() {
    infoPopup.classList.add('popup__opened');

    // TODO: получить данные для полей
}

function openCardAddPopup() {
    cardAddPopup.classList.add('popup-mesto__opened');

    // Button
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup__but-disabled');

    cardFormSubmitButton.classList.remove('popup__button-save'); // TODO: узнать что делает
}


//      Закрытие:


function closeInfoPopup() {
    infoPopup.classList.remove('popup__opened');
}

function closeCardAddPopup() {
    cardAddPopup.classList.remove('popup-mesto__opened');
}








// // Открывает 1 (PlaceEdit) попап
// const popupToggle = function () {
//     if (!popup.classList.contains('popup__opened')) {
//         nameInput.value = profName.textContent;
//         jobInput.value = profText.textContent;
//         document.body.addEventListener('keydown', escHandlerclosepopup);
//         FormValidator.clearErrors()
//     }
//
//     popup.classList.toggle('popup__opened');
// }
//
//
//
// // Toggle card
// const placePopupToggle = function () {
//     editPlacePopup.classList.toggle('popup-mesto__opened');
//
//     cardFormSubmitButton.setAttribute('disabled', true);
//     cardFormSubmitButton.classList.add('popup__but-disabled');
//     cardFormSubmitButton.classList.remove('popup__button-save');
//
//     // Открытие
//     if (editPlacePopup.classList.value != 'popup-mesto') {
//         document.body.addEventListener('keydown', escHandlerclosepopup);
//     }
//
//     FormValidator.clearErrors() //TODO: Перенести в открытие
// }
//
//
//
//
//
//
//
//
//
// // Закрытие попоп фото
// const popupFigureToggle = function () {
//     popupFigure.classList.toggle('popup__opened');
// }


// TODO: оверлей, не работает (Mesto)
 // Закрытие попап 1
function closesPopup() {
    popup.classList.remove('popup__opened');

}

// TODO: оверлей, не работает (Card)
// Закрытие попап 2
function closeEditPlacePopup() {
    editPlacePopup.classList.remove('popup-mesto__opened');
    console.log('test close')
}



// Close popups overlay all
export const closePopupOverlay = (event, closePopupCallback) => {
    if (event.target !== event.currentTarget) {return}

    closePopupCallback()
    document.body.removeEventListener('keydown', escHandlerclosepopup);
}

// Close Edit place
const closePopupEditPlaceOverlay = (event) => {
    closePopupOverlay(event, closeEditPlacePopup)
}

// Close card
const closePopupCardOverlay = (event) => {
    closePopupOverlay(event, closesPopup)
}

// // Close figure
// const closePopupFigureOverlay = (event) => {
//     closePopupOverlay(event, popupFigureToggle)
//
//     console.log('test')
// }

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

// cardFormElement.addEventListener('submit', formElementHandler)
// popupOpenButton.addEventListener('click', popupToggle)
// popupCloseButton.addEventListener('click', popupToggle)
//
// popup.addEventListener('click', closePopupCardOverlay);
// editPlacePopup.addEventListener('click', closePopupEditPlaceOverlay);
// popupFigure.addEventListener('click', closePopupFigureOverlay);
//
// openPlacePopupButton.addEventListener('click', placePopupToggle);
// closePlacePopupButton.addEventListener('click', placePopupToggle);
// popupImgCloseButton.addEventListener('click', popupFigureToggle);


//      Popups handlers
/*
* 1. openButtonInfoPopup, closeButtonInfoPopup
* 2. openPlacePopupButton (открытие), closePlacePopupButton (закрытие) | openButtonCardPopup closeButtonCardPopup
* 3. popupFigure (открытие), popupImgCloseButton (закрытие) | openButtonPhotoPopup, closeButtonPhotoPopup
* */


// init card by default
initialCards.forEach(el => {
    addCard(el.title, el.link)
})

