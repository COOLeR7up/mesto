import Popup from "./Popup.js";
import FormValidator from './FormValidator.js'
import {clearErrors} from "../pages";



export default class PopupWithForm extends Popup {
    constructor(selector, valueInputs, initCallback, beforeCloseCallback, submitCallback) {
        super(selector)
        this.selector = document.querySelector(selector)

        this.submitCallback = data => {

            submitCallback(data)
        }

        this.beforeCloseCallback = beforeCloseCallback ?? function () {}

        initCallback(this.selector)

        this.valueInputs = valueInputs

        super.setEventListeners()
        this.setEventListeners()
    }


    _getInputValues() {
        const data = []

        this.valueInputs.forEach(i => {
            data.push(this.selector.querySelector(i).value)
        })


        return data
    }


    setEventListeners() {
        super.setEventListeners()
        // submit
        this.selector.querySelector('.popup__button-save').addEventListener('click', this._submitClose())
    }


    _submitClose()  {
        return () => {
            this.submitCallback(this._getInputValues())
            this.close()
        }
    }

    open() {
        super.open()

        clearErrors()
    }


    close() {
        super.close()

        this.beforeCloseCallback(this.selector)
    }
}