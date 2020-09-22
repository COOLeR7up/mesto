

class Card {
    constructor(title, linkImg, template) {
        this.title = title
        this.linkImg = linkImg
        this.template = template

        this.card = document.querySelector(this.template).content.cloneNode(true);

        this.photo = this.card.querySelector('.element__foto')
    }

    _deleteCardHandler(event) {
        const card = event.target.closest('.element__group');
        card.remove();
    }

    _photoViewHandler(event) {
        document.body.addEventListener('keydown', escHandlerclosepopup, {once: true});
        const popupFigure = document.querySelector('.popup-img');
        const popupImgText = popupFigure.querySelector('.popup-img__name');
        const popupImgFoto = popupFigure.querySelector('.popup-img__foto');

        // Открытие popup
        popupFigure.classList.toggle('popup__opened');

        popupImgFoto.src = this.linkImg;
        popupImgText.textContent = this.title

    }

    _likeHandler(event) {
        const socialLikeTarget = event.target;
        socialLikeTarget.classList.toggle('element__social-likeactiv');
    }

    _handlerInit(card) {
        // Delete
        card.querySelector('.element__delete-but')
            .addEventListener('click', this._deleteCardHandler.bind(this));

        // Like
        card.querySelector('.element__social-like')
            .addEventListener('click', this._likeHandler.bind(this))

        // Photo View
        this.photo
            .addEventListener('click', this._photoViewHandler.bind(this))

        return card
    }

    generate() {

        this.card = this._handlerInit(this.card)

        this.card.querySelector('.element__text').textContent = this.title;
        this.photo.alt = this.title;
        this.photo.src = this.linkImg;

        return this.card
    }
}



