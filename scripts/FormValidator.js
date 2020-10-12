export default class FormValidator {
    constructor(settings, form) {
        this._form = document.querySelector(form)
        this._inputs = document.querySelectorAll(form + " " + settings.input)
        this._errorSelectors = document.querySelectorAll(form + " " + settings.errorSelector)
        this._button = document.querySelector(form + " " + settings.button)
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
                this._button.classList.remove('popup__but-disabled');
                this._button.classList.add('popup__button-save');
            } else {
                this._button.setAttribute('disabled', true);
                this._button.classList.add('popup__but-disabled');
            }
        }
    }

    _showInputError(input, index) {          //выводит ошибку валидации
        input.classList.add('form__input_type_error');
        this._errorSelectors[index].textContent = input.validationMessage;
        this._errorSelectors[index].classList.add('form__input-error_active');
    }

    _hideInputError(input, index) {                     //убирает ошибку валиадации
        input.classList.remove('form__input_type_error');
        this._errorSelectors[index].classList.remove('form__input-error_active');
        this._errorSelectors[index].textContent = '';
    }

    enableValidation() {

        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListener();
    }

    static clearErrors() {
        const button = document.querySelectorAll('.popup__button-save')

        button.forEach(button => {
            button.setAttribute('disabled', true);
            button.classList.add('popup__but-disabled');
        })

        const errors = document.querySelectorAll('.popup__error')
        errors.forEach(el => {
            el.textContent = ''
        })
    }
}
