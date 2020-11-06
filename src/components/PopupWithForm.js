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

        // const data = []
        //
        // this.valueInputs.forEach(i => {
        //     data.push(this.selector.querySelector(i).value)
        // })
        //
        // return data
        //
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
        console.log(buttonSave)
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