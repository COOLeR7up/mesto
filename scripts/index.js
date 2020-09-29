import FormValidator from './FormValidator.js'
import Card from './Card.js'
import {initialCards} from './constants.js'

// Const popup Info
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

// const popup Card
const cardAddPopup = document.querySelector('.popup-mesto');
// Открытие card popup
const openButtonCardAddPopup = document.querySelector('.profile__button-border');
// Закрытие card popup
const closeButtonCardAddPopup = cardAddPopup.querySelector('.popup-mesto__close');

const cardFormElement = cardAddPopup.querySelector('.popup-mesto__content');

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
// info
function openInfoPopup() {
         if (!infoPopup.classList.contains('popup__opened')) {
             nameInput.value = profName.textContent;
             jobInput.value = profText.textContent;
             document.body.addEventListener('keydown', escHandlerclosepopup);

         }
    FormValidator.clearErrors()
    infoPopup.classList.add('popup__opened');
}
// Card
function openCardAddPopup() {
    document.body.addEventListener('keydown', escHandlerclosepopup);
    cardAddPopup.classList.add('popup-mesto__opened');
    FormValidator.clearErrors()
}

//      Закрытие:

// Info
function closeInfoPopup() {
    infoPopup.classList.remove('popup__opened');
    document.body.removeEventListener('keydown', escHandlerclosepopup);
}
// Card
function closeCardAddPopup() {
    cardAddPopup.classList.remove('popup-mesto__opened');
    document.body.removeEventListener('keydown', escHandlerclosepopup);
}

//      SUBMIT

// функция sibmit popup info
function formSubmitHandler (evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    closeInfoPopup()
}
// sibmit popup Card
const formElementHandler = e => {
    e.preventDefault();
    const title = cardInputElement.value;
    const link = cardInputLinkEl.value;
    cardFormElement.reset();
    addCard(title, link)

    closeCardAddPopup()
}

// Закрытие overlay popup info
const closeInfoPopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    closeInfoPopup();
}
// Закрытие overlay popup Card
const closeAddCardPopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    closeCardAddPopup();
}
// Закрытие overlay popup Photo
export const closePopupOverlay = (event, closePopupCallback) => {
    if (event.target !== event.currentTarget) {return}

    closePopupCallback()
    document.body.removeEventListener('keydown', escHandlerclosepopup);
}

// Закрытие на Esc
const escHandlerclosepopup = event => {
    const escCode = 27;

    if (event.keyCode === escCode) {

        closeCardAddPopup(event)
        closeInfoPopup(event)

    };
}

// Добавление Card из массива
function addCard(title, link) {
    const templateSelector = '.element-template'
    const card = new Card(title, link, templateSelector)
    cardsList.prepend(card.generate())
}



// Открытие
// попапа Info
openButtonInfoPopup.addEventListener('click', openInfoPopup)
// попап Card
openButtonCardAddPopup.addEventListener('click', openCardAddPopup)

// Закрытие
// Попап info
closeButtonInfoPopup.addEventListener('click', closeInfoPopup)
// Попап Info Overlay
infoPopup.addEventListener('click', closeInfoPopupOverlay)
// Попап Card
closeButtonCardAddPopup.addEventListener('click', closeCardAddPopup)
// Попап Card Overlay
cardAddPopup.addEventListener('click', closeAddCardPopupOverlay)

// SUBMIT
// submit popup info
formElement.addEventListener('submit', formSubmitHandler);
// submit popup Card
cardFormElement.addEventListener('submit', formElementHandler);

//      Popups handlers
/*
* 1. openButtonInfoPopup, closeButtonInfoPopup
* 2. openButtonCardAddPopup closeButtonCardAddPopup
* 3. openButtonPhotoPopup, closeButtonPhotoPopup
* */


// init card by default
initialCards.forEach(el => {
    addCard(el.title, el.link)
})

