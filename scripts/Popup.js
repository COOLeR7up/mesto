export default class Popup {
    constructor(selector) {
        this.selector = document.querySelector(selector)
    }


    open() {
        this.selector.classList.add('popup__opened');

        this.setEventListeners()
    }


    close() {
        this.selector.classList.remove('popup__opened');
    }


    _handleEscClose = (event) => {
        const escCode = 27;

        if (event.keyCode === escCode) {
            this.close()
        }
    }


    setEventListeners() {
        // overlay
        this.selector.addEventListener('click',  (event) =>  {
            if (event.target === event.currentTarget) {
                this.close()
            }
        })

        // esc
        document.querySelector('body').addEventListener('keydown', this._handleEscClose.bind(this))

        // крестик
        this.selector.querySelector('.popup__close').addEventListener('click', () => {
            this.close()
        })
    }
}