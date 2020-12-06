export const popupFigure = document.querySelector('.popup-img');
export const popupImgText = popupFigure.querySelector('.popup-img__name');
export const popupImgFoto = popupFigure.querySelector('.popup-img__foto');
export const popupImgCloseButton = popupFigure.querySelector('.popup__close');
export const cardsList = document.querySelector('.element__list')
export const ESC_CODE = 27;

export const initialCards = [
    {
        title: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        title: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        title: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        title: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        title: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        title: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];


export const settingInfoValidation = {
    input: '.popup__input',
    errorSelector: '.popup__error',
    controlSelector: '.popup__control',
    button: '.popup__button-save',
    disableBtnSelector: 'popup__but-disabled',
    typeErrorSelector: 'form__input_type_error',
    activeErrorSelector: 'form__input-error_active'
}

export const settingAddCardValidation = {
    input: '.popup__input',
    errorSelector: '.popup__error',
    controlSelector: '.popup__control',
    button: '.popup-mesto__button-save',
    disableBtnSelector: 'popup__but-disabled',
    typeErrorSelector: 'form__input_type_error',
    activeErrorSelector: 'form__input-error_active',
    clearBeforeClose: true
}

export const settingEditAvatarValidation = {
    input: '.popup__input',
    errorSelector: '.popup__error',
    controlSelector: '.popup__control',
    button: '.popup-edit-avatar__btn',
    disableBtnSelector: 'popup__but-disabled',
    typeErrorSelector: 'form__input_type_error',
    activeErrorSelector: 'form__input-error_active',
    clearBeforeClose: true
}
