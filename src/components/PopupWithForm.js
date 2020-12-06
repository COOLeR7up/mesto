import Popup from "./Popup.js";
import CardRepository from "../API/Repository/CardRepository.js";


export default class PopupWithForm extends Popup {
    constructor(selector, valueInputs, initCallback, beforeCloseCallback, submitCallback, clearErrors) {
        super(selector)
        this.selector = document.querySelector(selector)

        this.submitCallback = data => {

            CardRepository.add(data.cardName, data.cardLink)

            submitCallback(data)
        }

        this.beforeCloseCallback = beforeCloseCallback ?? function () {}

        initCallback(this.selector)

        this.valueInputs = valueInputs

        this.setEventListeners()

        this.clearErrors = clearErrors
    }

_getInputValues() {

        const formValues = {};

        this.valueInputs.forEach(selector => {
            const input = this.selector.querySelector(selector)
            formValues[input.name] = input.value
        })

        return formValues
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