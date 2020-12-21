import {ESC_CODE} from "../utils/constants";



export default class Popup {
    constructor(selector) {
        this.popupElement = document.querySelector(selector)

        this._handleEscClose = this._handleEscClose.bind(this)
    }


    open() {
        this.popupElement.classList.add('popup__opened');

        // esc
        document.querySelector('body').addEventListener('keydown', this._handleEscClose)
    }


     close() {
        this.popupElement.classList.remove('popup__opened');

        document.querySelector('body').removeEventListener('keydown', this._handleEscClose)
    }

    setEventListeners() {

        // overlay
        this.popupElement.addEventListener('click', this._overlayClose())

        // крестик
        this.popupElement.querySelector('.popup__close').addEventListener('click', this.close.bind(this))

    }


    _handleEscClose(event) {
        if (event.keyCode === ESC_CODE) {
            this.close()
        }
    }

    _overlayClose(event) {
        return (event) => {
            if (event.target == event.currentTarget) {

                this.close()
            }
        }
    }
}