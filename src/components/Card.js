import PopupCardDelete from "./PopupCardDelete.js";
import {clearErrors} from "../pages";
import {generateId} from "../utils/pure";

export default class Card {
    constructor(title, imgLink, likes, id, actualId, template, handlerCardClick, ownerId
                , {fetchCardDelete, fetchDeleteLike, fetchAddLike}) {

        this._isRubbish = !((ownerId == undefined) || (actualId == ownerId))

        this._title = title
        this._likes = likes ?? []
        this._id = id ?? generateId()
        this._imgLink = imgLink
        this._template = template
        this._card = document.querySelector(this._template).content.cloneNode(true);

        // fetch
        this.fetchCardDelete = fetchCardDelete
        this.fetchDeleteLike = fetchDeleteLike
        this.fetchAddLike = fetchAddLike

        this._photo = this._card.querySelector('.element__foto')

        this.handlerCardClick = handlerCardClick
        this._likeDefault(actualId)
    }

    _deleteCardHandler(event) {
        // DeleteCard удаляет карту
        const deleteCardSelector = '.popup-card-delite'
        const card = event.target.closest('.element__group');

        const deleteCard = () => {
            card.remove();
        }

        this.fetchCardDelete(this._id)

        const popupCardDelete = new PopupCardDelete(deleteCardSelector, deleteCard)
        card.addEventListener('click', popupCardDelete.open());
        clearErrors()
    }

    _likeDefault(actualId) {
        this._likes.forEach(i => {
            if (i._id == actualId) {
                const socialLikeTarget = this._card.querySelector('.element__social-like');
                socialLikeTarget.classList.toggle('element__social-likeactiv');
            }
        })
    }


    _likeHandler(event) {
        const socialLikeTarget = event.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');
        const cardElem = '.element__group'

        document.querySelectorAll(cardElem).forEach(card => {
            if (card.getAttribute('_id') == this._id) {
                const likesSelector = '.element__social-like-score'
                const like = card.querySelector(likesSelector)
                const buttonLikeSelector = '.element__social-like'
                const buttonLikeElem = card.querySelector(buttonLikeSelector)
                const isActive = buttonLikeElem.classList.length == 1

                if (isActive) {
                    like.textContent = like.textContent - 1
                    this.fetchDeleteLike(this._id)
                } else {
                    this.fetchAddLike(this._id)
                    like.textContent = like.textContent - 0 + 1
                }
            }
        })
    }


    _handlerInit(card) {
        // Delete
        card.querySelector('.element__delete-but')
            .addEventListener('click', this._deleteCardHandler.bind(this));

        // Like
        card.querySelector('.element__social-like')
            .addEventListener('click', this._likeHandler.bind(this))

        this._photo.addEventListener('click', () => {
            this.handlerCardClick(this._imgLink, this._title)
        })

        return card
    }

    _hideRabbish() {
        const rubbishSelector = '.element__delete-but'
        this._card.querySelector(rubbishSelector).style.display = 'none'
    }

    generate() {
        this._card = this._handlerInit(this._card)

        this._card.querySelector('.element__group').setAttribute('_id', this._id)

        this._card.querySelector('.element__text').textContent = this._title;
        this._photo.alt = this._title;
        this._photo.src = this._imgLink;

        const likesSelector = '.element__social-like-score'
        this._card.querySelector(likesSelector).textContent = this._likes.length

        if (this._isRubbish) this._hideRabbish()

        return this._card
    }
}



