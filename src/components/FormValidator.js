export default class FormValidator {
    constructor(settings, form) {
        this._form = document.querySelector(form)
        this._inputs = document.querySelectorAll(form + " " + settings.input)
        this._errorSelectors = document.querySelectorAll(form + " " + settings.errorSelector)
        this._button = document.querySelector(form + " " + settings.button)
        this.disableBtnSelector = settings.disableBtnSelector
        this.typeErrorSelector = settings.typeErrorSelector
        this.activeErrorSelector = settings.activeErrorSelector
    }

    _setEventListener() {                                 //функция слушателя инпутов
        this._inputs.forEach((input, index) => {
            input.addEventListener('input', () => {
                this._checkInputValidity(input, index);
                this._toggleButtonState();
            });
        })
    }

    _checkInputValidity(input, index) {                 //выбора валидации'
        if (!input.validity.valid) {
                this._showInputError(input, index);
            } else {
            this._hideInputError(input, index);
        }
    }

    _toggleButtonState() {
        if (!(this._button == null)) {
            if (this._form.checkValidity()) {
                this._button.removeAttribute('disabled');
                this._button.classList.remove(this.disableBtnSelector);

                const popupButtonSave = 'popup__button-save'
                this._button.classList.add(popupButtonSave);
            } else {
                this._button.setAttribute('disabled', true);
                this._button.classList.add(this.disableBtnSelector);
            }
        }
    }

    _showInputError(input, index) {          //выводит ошибку валидации
        // input.classList.add(this.typeErrorSelector);
        this._errorSelectors[index].textContent = input.validationMessage;
        // this._errorSelectors[index].classList.add(this.activeErrorSelector);
    }

    _hideInputError(input, index) {                     //убирает ошибку валиадации
        // input.classList.remove(this.typeErrorSelector);
        // this._errorSelectors[index].classList.remove(this.activeErrorSelector);
        this._errorSelectors[index].textContent = '';
    }

    enableValidation() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListener();
    }
}
