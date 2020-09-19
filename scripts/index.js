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



//Открывает 1 попап
const popupToggle = function (event) {
    if (!popup.classList.contains('popup__opened')) {
        nameInput.value = profName.textContent;
        jobInput.value = profText.textContent;
        addCardValidator()
    }
    popup.classList.toggle('popup__opened');

};
// Закрытие попоп фото
const popupFigureToggle = function () {
   popupFigure.classList.toggle('popup__opened');
 }
function closesPopup(){
    popup.classList.remove('popup__opened');
    editPlacePopup.classList.remove('popup-mesto__opened');
    popupFigure.classList.remove('popup__opened');
}

const placePopupToggle = function () {
    editPlacePopup.classList.toggle('popup-mesto__opened');
    cardFormSubmitButton.setAttribute('disabled', true);
    cardFormSubmitButton.classList.add('popup__but-disabled');
    cardFormSubmitButton.classList.remove('popup__button-save');
    addPlaceValidator()
}

//закрытие попапов на оверлей.
const closePopupOverlay = function (event) {
    if (event.target !== event.currentTarget) {return}
    closesPopup();
}


function formSubmitHandler (evt) {
    evt.preventDefault();
    profName.textContent = nameInput.value;
    profText.textContent = jobInput.value;
    popupToggle();
}

formElement.addEventListener('submit', formSubmitHandler);

const escHandlerclosepopup = e => {
        const escCode = 27;
        if (e.keyCode === escCode) {
            closesPopup()
        };
}

document.body.addEventListener('keydown', escHandlerclosepopup);

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
popup.addEventListener('click', closePopupOverlay);
editPlacePopup.addEventListener('click', closePopupOverlay);
popupFigure.addEventListener('click', closePopupOverlay);
openPlacePopupButton.addEventListener('click', placePopupToggle);
closePlacePopupButton.addEventListener('click', placePopupToggle);
popupImgCloseButton.addEventListener('click', popupFigureToggle);


// init card by default
initialCards.forEach(el => {
    addCard(el.title, el.link)
})

function addPlaceValidator() {
    const settingAddPlaceValidation = {
        form: '.popup-mesto__content',
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup-mesto__button-save',
    }

    const addPlaceValidation = new FormValidator(settingAddPlaceValidation)
    addPlaceValidation.enableValidation()
}


function addCardValidator() {
    const settingAddCardValidation = {
        form: '.popup__content',
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup__button-save',
    }

    const addCardValidation = new FormValidator(settingAddCardValidation)
    addCardValidation.enableValidation()
}