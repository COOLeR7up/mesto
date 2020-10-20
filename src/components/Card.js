import PopupWithImage from "./PopupWithImage.js"

import {popupFigure} from '../utils/constants.js'


export default class Card {
    constructor(title, imgLink, template, handleCardClick) {
        this._title = title
        this._imgLink = imgLink
        this._template = template
        this._card = document.querySelector(this._template).content.cloneNode(true);

        this.handleCardClick = handleCardClick
        this._photo = this._card.querySelector('.element__foto')
    }

    _deleteCardHandler(event) {
        const card = event.target.closest('.element__group');
        card.remove();
    }


    _likeHandler(event) {
        const socialLikeTarget = event.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');
    }


    _handlerInit(card, imageViewPopup) {
        // Delete
        card.querySelector('.element__delete-but')
            .addEventListener('click', this._deleteCardHandler.bind(this));

        // Like
        card.querySelector('.element__social-like')
            .addEventListener('click', this._likeHandler.bind(this))

        this._photo.addEventListener('click', () => {
            imageViewPopup.open(this._imgLink, this._title)
        })

        return card
    }


    generate(imageViewPopup) {
        this._card = this._handlerInit(this._card, imageViewPopup)

        this._card.querySelector('.element__text').textContent = this._title;
        this._photo.alt = this._title;
        this._photo.src = this._imgLink;

        return this._card
    }
}



