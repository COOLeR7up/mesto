import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor(selector, valueInputs, initCallback, beforeCloseCallback, submitCallback, clearErrors) {
        super(selector)
        this.selector = document.querySelector(selector)

        this.submitCallback = data => {

            submitCallback(data)
        }

        this.beforeCloseCallback = beforeCloseCallback ?? function () {}

        initCallback(this.selector)

        this.valueInputs = valueInputs

        this.setEventListeners()

        this.clearErrors = clearErrors
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
        this.selector.querySelector('.popup__button-save').addEventListener('submit', this._submitClose())
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