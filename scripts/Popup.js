import FormValidator from "./FormValidator.js";


export default class Popup {
    constructor(selector) {
        this.selector = document.querySelector(selector)
    }

    open = () => {
        console.log('popup')
        this.selector.classList.add('popup__opened');

        this.setEventListeners()
    }

    close = () => {
        this.selector.classList.remove('popup__opened');
    }

    _handleEscClose = (event) => {
        const escCode = 27;

        if (event.keyCode === escCode) {
            this.close()
        }
    }

    setEventListeners = () => {
        // overlay
        this.selector.addEventListener('click', event => {
            if (event.target == event.currentTarget) {
                this.close()
            }
        })

        // esc
        this.selector.addEventListener('keydown', this._handleEscClose)

        // крестик
        this.selector.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        })
    }
}