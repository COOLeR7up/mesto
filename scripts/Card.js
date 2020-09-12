

class Card {
    constructor(title, linkImg, template) {
        this.title = name
        this.linkImg = linkImg
        this.template = template
    }

    _deleteCardHandler(event) {
        const card = event.target.closest('.element__group');
        card.remove();
    }

    _photoViewHandler(event) {
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
            .addEventListener('click', this._deleteCardHandler);

        // Like
        card.querySelector('.element__social-like')
            .addEventListener('click', this._likeHandler)

        // Photo View
        card.querySelector('.element__foto')
            .addEventListener('click', this._photoViewHandler)

        return card
    }

    generate() {
        let card = document.querySelector(this.template)
            .content.cloneNode(true);

        card = this._handlerInit(card)

        card.querySelector('.element__text').textContent = this.title;
        card.querySelector('.element__foto').alt = this.title;
        card.querySelector('.element__foto').src = this.linkImg;

        return card
    }
}


const card = new Card('testname', '', '.element-template');

