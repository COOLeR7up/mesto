import Popup from "./Popup.js";

import {profName, profText} from "./index.js";
import FormValidator from "./FormValidator.js";
import UserInfo from "./UserInfo.js";



export default class PopupWithForm extends Popup {
    constructor(selector, submitCallback) {
        super(selector)

        this.selector = document.querySelector(selector)
        submitCallback(this.selector)


    }


    _getInputValues = () => ({
        name: this.selector.querySelector('.profile__name'),
        job: this.selector.querySelector('.profile__text')
    })


    setEventListeners() {
        super.setEventListeners()

        this.selector.querySelector('.popup__button-save').addEventListener('click', () => {
            this.close()
        })
    }


    open() {
        //super.open()
        this.selector.classList.add('popup__opened');

        this.setEventListeners()

        console.log('popup with form')
        FormValidator.clearErrors()


        const {name, job} = new UserInfo().getInstance().getUserInfo()

        console.log(name + ' ' + job)

        this.selector.querySelector('.popup__prof-name').value = name
        this.selector.querySelector('.popup__prof-text').value = job

        // Validators
        const settingAddCardValidation = {
            input: '.popup__input',
            errorSelector: '.popup__error',
            controlSelector: '.popup__control',
            button: '.popup__button-save',
        }

        const addCardValidation = new FormValidator(settingAddCardValidation, '.popup__content')
        addCardValidation.enableValidation()
    }


    close() {

    }
}