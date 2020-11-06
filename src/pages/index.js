import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {initialCards} from "../utils/constants.js";

import './index.css'
import PopupWithImage from "../components/PopupWithImage";
import {
    cardsList,
    popupImgFoto,
    popupImgText,
    settingAddCardValidation,
    settingInfoValidation
} from "../utils/constants";
import Card from "../components/Card";


// UserInfo
const userInfoSelectors = {nameSelector: '.profile__name', jobSelector: '.profile__text'}
const userInfo = new UserInfo(userInfoSelectors)


// Initial default cards

// Photo View
const imageViewPopupSelector = '.popup-img'
const imageViewPopup = new PopupWithImage(imageViewPopupSelector, popupImgFoto, popupImgText)

function handlerCardClick() {
    imageViewPopup.open(this._imgLink, this._title)
}

const section = new Section({
    items: initialCards,
    renderer: (title, link) => {
        const templateSelector = '.element-template'
        const card = new Card(title, link, templateSelector, handlerCardClick)

        return card
    }
}, cardsList)
section.items.forEach(item => {
    section.addItem(item.title, item.link)
})


// Validators
const validation = (settings, content) => {
    const addCardValidation = new FormValidator(settings, content)
    addCardValidation.enableValidation()
}

export function clearErrors() {
    const button = document.querySelectorAll('.popup__button-save')

    button.forEach(button => {
        button.setAttribute('disabled', true);
        button.classList.add('popup__but-disabled');
    })

    const errors = document.querySelectorAll('.popup__error')
    errors.forEach(el => {
        el.textContent = ''
    })
}


//  ==- Popups -==
// Info
const infoPopupSelector = '.popup'

const initInfo = () => {
    const {name, job} = userInfo.getUserInfo()

    const nameInputSelector = '.popup__prof-name'
    const jobInputSelector = '.popup__prof-text'

    document.querySelector(infoPopupSelector).querySelector(nameInputSelector).value = name
    document.querySelector(infoPopupSelector).querySelector(jobInputSelector).value = job

    const content = '.popup__content'

    validation(settingInfoValidation, content)
}


const infoSubmitHandler = (data) => {
    userInfo.setUserInfo({name: data.profName, job: data.profText})
}
const inputsPopupInfo = ['.popup__prof-name', '.popup__prof-text']

const infoPopup = new PopupWithForm(
    infoPopupSelector,
    inputsPopupInfo,
    initInfo.bind(this),
    null,
    infoSubmitHandler,
    clearErrors
)
const infoPopupButton = document.querySelector('.profile__edit')

infoPopupButton.addEventListener('click', infoPopup.open.bind(infoPopup))


// AddCard
const addCardPopupSelector = '.popup-mesto'

const addCardSubmitHandler = (data) => {
    section.addItem(data.cardName, data.cardLink)
}

const addCardInitPopup = (selector) => {

    const content = '.popup-mesto__content'

    validation(settingAddCardValidation, content)
}

const addCardBeforeCloseCallback = (selector) => {
    // inputs clear
    selector.querySelectorAll('input')[0].value = ''
    selector.querySelectorAll('input')[1].value = ''
}

const inputsPopupAddCard = ['.popup-mesto__prof-name', '.popup-mesto__prof-text']
const addCardPopup = new PopupWithForm(
    addCardPopupSelector,
    inputsPopupAddCard,
    addCardInitPopup.bind(this),
    addCardBeforeCloseCallback.bind(this),
    addCardSubmitHandler,
    clearErrors
)

const addCardButton = document.querySelector('.profile__button-border')

addCardButton.addEventListener('click', addCardPopup.open.bind(addCardPopup))



