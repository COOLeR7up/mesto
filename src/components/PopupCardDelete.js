import Popup from "./Popup.js";
import {clearErrors} from "../pages";


export default class PopupCardDelete extends Popup {
    constructor(selector, deleteCard) {
        super(selector);

        this.selector = document.querySelector(selector)


        this.deleteCard = deleteCard

        this.setEventListeners()

        // this.clearErrors = clearErrors
    }


    setEventListeners() {
        super.setEventListeners();

        const buttonSave = this.selector.querySelector('.popup-card-delite__btn')
        buttonSave.addEventListener('click', this._submitClose())

    }

    _submitClose()  {
        return () => {
            this.deleteCard()

            this.close()
        }
    }

    open() {
        super.open()

        // this.clearErrors()
        clearErrors()
    }

    close() {
        super.close()


    }
}