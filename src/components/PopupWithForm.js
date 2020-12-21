import Popup from "./Popup.js";


export default class PopupWithForm extends Popup {
    constructor(selector, valueInputs, initCallback, beforeCloseCallback, submitCallback, clearErrors) {
        super(selector)
        this.selector = document.querySelector(selector)

        this.submitCallback = (data, close) => {

            submitCallback(data, close)
        }

        this.beforeCloseCallback = beforeCloseCallback ?? function () {}

        this.initCallback = initCallback
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
            this.submitCallback(this._getInputValues(), this.close.bind(this))
        }
    }

    open() {
        super.open()

        this.initCallback()

        this.clearErrors()
    }


    close() {
        super.close()

        this.beforeCloseCallback(this.selector)
    }


    static saveTextToButton() {
        const buttonLabel = '.popup__button-save'
        document.querySelectorAll(buttonLabel).forEach(i => {
            i.textContent = 'Сохранение...'
        })
    }


    static clearSaveTextToButton(str = 'Сохранить') {
        const buttonLabel = '.popup__button-save'
        document.querySelectorAll(buttonLabel).forEach(i => {
            setTimeout(() => {
                i.textContent = str
            }, 3000)

        })
    }
}