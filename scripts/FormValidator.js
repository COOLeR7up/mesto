class FormValidator {
    constructor(settings, form) {
        this.form = document.querySelector(form)
        this.input = document.querySelectorAll(form + " " + settings.input)
        this.errorSelector = document.querySelectorAll(form + " " + settings.errorSelector)
        this.controlSelector = document.querySelectorAll(settings.controlSelector)
        this.button = document.querySelector(form + " " + settings.button)
    }

    _setEventListener() {                                 //функция слушателя инпутов
        this.input.forEach((input, index) => {
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
        if (!(this.button == null)) {
            if (this.form.checkValidity()) {
                this.button.removeAttribute('disabled');
                this.button.classList.remove('popup__but-disabled');
                this.button.classList.add('popup__button-save');
            } else {
                this.button.setAttribute('disabled', true);
                this.button.classList.add('popup__but-disabled');
                this.button.classList.remove('popup__button-save');
            }
        }
    }

    _showInputError(input, index) {          //выводит ошибку валидации
        input.classList.add('form__input_type_error');
        this.errorSelector[index].textContent = input.validationMessage;
        this.errorSelector[index].classList.add('form__input-error_active');
    }

    _hideInputError(input, index) {                     //убирает ошибку валиадации
        input.classList.remove('form__input_type_error');
        this.errorSelector[index].classList.remove('form__input-error_active');
        this.errorSelector[index].textContent = '';
    }

    enableValidation() {

        this.form.addEventListener('submit', (evt) => {
            evt.preventDefault();
        });

        this._setEventListener();
    }

    static clearErrors() {
        const errors = document.querySelectorAll('.popup__error')
        errors.forEach(el => {
            el.textContent = ''
        })
    }
}
//
// const settings = {
//
// }
// const formValidator = new FormValidator(settings)
//
//     // enableValidation({
//     //                      formSelector: '.form',
//     //                      controlSelector: '.popup__control',
//     //                      inputSelector: '.popup__input',
//     //                      errorSelector: '.popup__error',
//     //                  });