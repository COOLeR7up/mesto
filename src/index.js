import FormValidator from "../scripts/FormValidator.js";
import Section from "../scripts/Section.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";

import {initialCards} from "../scripts/constants.js";

export const profName = document.querySelector('.profile__name');
export const profText = document.querySelector('.profile__text');


export const closePopupOverlay = (event, closePopupCallback) => {
    if (event.target !== event.currentTarget) {return}

    closePopupCallback()
    document.body.removeEventListener('keydown', escHandlerclosepopup);
}

// UserInfo
const userInfoSelectors = {nameSelector: '.profile__name', jobSelector: '.profile__text'}
const userInfo = new UserInfo(userInfoSelectors)


// Initial default cards
const section = new Section({
    items: initialCards,
    renderer: null
}, '.element__list')
section.items.forEach(item => {
    section.addItem(item.title, item.link)
})


// Validators
const validation = (settings, content) => {
    const addCardValidation = new FormValidator(settings, content)
    addCardValidation.enableValidation()
}

//  ==- Popups -==
// Info
const infoPopupSelector = '.popup'

const infoInit = () => {
    const {name, job} = userInfo.getUserInfo()

    const nameInputSelector = '.popup__prof-name'
    const jobInputSelector = '.popup__prof-text'

    document.querySelector(infoPopupSelector).querySelector(nameInputSelector).value = name
    document.querySelector(infoPopupSelector).querySelector(jobInputSelector).value = job

    const settingInfoValidation = {
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup__button-save',
    }

    const content = '.popup__content'

    validation(settingInfoValidation, content)
}

const infoSubmitHandler = (data) => {
    userInfo.setUserInfo({name: data[0], job: data[1]})
}

const infoPopup = new PopupWithForm(infoPopupSelector, infoInit.bind(this), infoSubmitHandler)
const infoPopupButton = document.querySelector('.profile__edit')

infoPopupButton.addEventListener('click', infoPopup.open.bind(infoPopup))


// AddCard
const addCardPopupSelector = '.popup-mesto'

const addCardSubmitHandler = (data) => {
    section.addItem(data[0], data[1])
}

const addCardInitPopup = () => {
    const settingAddCardValidation = {
        input: '.popup__input',
        errorSelector: '.popup__error',
        controlSelector: '.popup__control',
        button: '.popup-mesto__button-save',
    }

    const content = '.popup-mesto__content'

    validation(settingAddCardValidation, content)
}

const addCardPopup = new PopupWithForm(addCardPopupSelector, addCardInitPopup.bind(this), addCardSubmitHandler)
const addCardButton = document.querySelector('.profile__button-border')

addCardButton.addEventListener('click', addCardPopup.open.bind(addCardPopup))



