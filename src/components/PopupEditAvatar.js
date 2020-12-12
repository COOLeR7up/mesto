import Popup from "./Popup.js";
import {clearErrors} from "../pages";
import PopupWithForm from "./PopupWithForm";

export default class PopupEditAvatar extends Popup {
    constructor(selector, initCallback, beforeCloseCallback, submitCallback, clearErrors) {
        super(selector);

        this.selector = document.querySelector(selector)

        this.submitCallback = data => {
            submitCallback(data)
        }

        this.beforeCloseCallback = beforeCloseCallback ?? function () {}

        initCallback(this.selector)


        this.setEventListeners()

        this.clearErrors = clearErrors
    }

    _getInputValues() {
        const input = this.selector.querySelector('input')
        return input.value
    }

    setEventListeners() {
        super.setEventListeners()

        // submit
        const buttonSave = this.selector.querySelector('.popup__button-save')

        buttonSave.addEventListener('click', this._submitClose())

    }

    _submitClose()  {
        return () => {
            this.submitCallback(this._getInputValues())
            this.close()
        }
    }

    open() {
        super.open()

        this.clearErrors()
    }


    close() {
        super.close()

        this.beforeCloseCallback(this.selector)
    }
}