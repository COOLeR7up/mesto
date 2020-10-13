import Popup from "./Popup.js";
import FormValidator from './FormValidator.js'


export default class PopupWithForm extends Popup {
    constructor(selector, initCallback, submitCallback) {
        super(selector)
        this.selector = document.querySelector(selector)

        this.submitCallback = data => {

            submitCallback(data)
        }
        this.initCallback = initCallback
    }

// TODO: arrow
    _getInputValues() {
        return ([
            this.selector.querySelectorAll('input')[0].value,
            this.selector.querySelectorAll('input')[1].value
        ])
    }


    setEventListeners() {
        // overlay
        this.selector.addEventListener('click', this._overlayClose)

        // esc
        document.addEventListener('keydown', this._handleEscClose)

        // крестик
        this.selector.querySelector('.popup__close').addEventListener('click', this._figureClose)

        // submit
        this.selector.querySelector('.popup__button-save').addEventListener('click', this._submitClose)
    }


    removeEventListeners() {
        this.selector.removeEventListener('click', this._overlayClose)

        document.removeEventListener('keydown', this._handleEscClose)

        this.selector.querySelector('.popup__close').removeEventListener('click', this._figureClose)

        this.selector.querySelector('.popup__button-save').removeEventListener('click', this._submitClose)

    }


    _overlayClose(event) {// TODO: arrow
        if (event.target == event.currentTarget) {
            this.close()
        }
    }


    _figureClose() { // TODO: arrow
        this.close()
    }


    _submitClose()  { // TODO: arrow
        this.submitCallback(this._getInputValues())
        this.close()
    }


    open() {
        this.selector.classList.add('popup__opened');

        this.setEventListeners()

        this.selector.querySelectorAll('input')[0].value = ''
        this.selector.querySelectorAll('input')[1].value = ''

        FormValidator.clearErrors()

        if (this.initCallback) this.initCallback()
    }


    close() {
        super.close()

        this.removeEventListeners()
    }
}