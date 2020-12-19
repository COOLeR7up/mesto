import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

import {initialCards, settingEditAvatarValidation} from "../utils/constants.js";

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


import { generateId } from "../utils/pure";
import UserModel from "../API/Model/UserModel";
import Api from "../components/Api";

// UserInfo
const userInfoSelectors = {nameSelector: '.profile__name', jobSelector: '.profile__text', photoSelector: '.profile__avatar'}
const userInfo = new UserInfo(userInfoSelectors)

// Initial default cards

// Photo View
const imageViewPopupSelector = '.popup-img'
const imageViewPopup = new PopupWithImage(imageViewPopupSelector, popupImgFoto, popupImgText)

function handlerCardClick() {
    imageViewPopup.open(this._imgLink, this._title)
}
const section = new Section({
    renderer: (title, link, likes, id, ownerId) => {

        const fetchCardDelete = (id) => {
            api.cardDelete(id)
                .catch(err => console.log(err))
        }

        const fetchDeleteLike = (id) => {
            api.deleteLike(id)
                .catch(err => console.log(err))
        }

        const fetchAddLike = (id) => {
            api.addLike(id)
                .catch(err => console.log(err))
        }

        const cardFetch = {
            fetchCardDelete,
            fetchDeleteLike,
            fetchAddLike
        }

        const templateSelector = '.element-template'
        const card = new Card(title, link, likes, id, userInfo.id, templateSelector, handlerCardClick, ownerId, cardFetch)

        return card
    }
}, cardsList)


const api = new Api()

const fetchInfo = api.get()
    .then(result => {
        const user = {
            name: result.name,
            job: result.about,
            id: result._id
        }

        userInfo.setUserInfo(user)
        userInfo.setAvatar(result.avatar)
        userInfo.setId(result._id)
        return
    })
    .catch(err => console.log(err))

const fetchCards = api.getAll()
    .then((result) => {
        result = result.reverse()
        result.forEach(item => {
            section.addItem(item.name, item.link, item.likes, item._id, item.owner._id)
        })
        return
    })
    .catch(err => console.log(err))

Promise.all([fetchCards, fetchInfo])
    .catch(err => console.log(err))

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

    const user = new UserModel(data.profName, data.profText)

    PopupWithForm.saveTextToButton()

    api.update(user)
        .catch(err => console.log(err))
        .finally(() => {
            PopupWithForm.clearSaveTextToButton()
        })
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
    section.addItem(data.cardName, data.cardLink, null, null)
    PopupWithForm.saveTextToButton()

    api.add(data.cardName, data.cardLink)
        .catch(err => console.log(err))

    PopupWithForm.clearSaveTextToButton('Создать')

    setTimeout(() => {location.href = location.href}, 500)
}

const addCardInitPopup = (selector) => {

    const content = '.popup-mesto__content'

    validation(settingAddCardValidation, content)
}

const addCardBeforeCloseCallback = (selector) => {
    // inputs clear
    const formSelector = '.popup-mesto__content'
    console.log(selector.querySelector(formSelector))
    selector.querySelector(formSelector).reset()
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

//PopupEditAvatar

const editAvatarInitPopup = (selector) => {

    const content = '.popup-edit-avatar__content'

    validation(settingEditAvatarValidation, content)
}


const editAvatarBeforeCloseCallback = (selector) => {
    const formSelector = '.popup-edit-avatar__content'
    selector.querySelector(formSelector).reset()
}

const editAvatarSubmitHandler = (data) => {

    api.updateAvatar(data.avatarImg)
        .catch(err => console.log(err))

    PopupWithForm.saveTextToButton()
    userInfo.setAvatar(data.avatarImg)
    PopupWithForm.clearSaveTextToButton()
}

const editAvatarSelector = '.popup-edit-avatar'
const imputEditAvatarPopup = ['.popup-edit-avatar__input']

const popupEditAvatar = new PopupWithForm(
    editAvatarSelector,
    imputEditAvatarPopup,
    editAvatarInitPopup.bind(this),
    editAvatarBeforeCloseCallback.bind(this),
    editAvatarSubmitHandler,
    clearErrors
)

const editAvatarButton = document.querySelector('.profile__avatar-all')

editAvatarButton.addEventListener('click', popupEditAvatar.open.bind(popupEditAvatar))





