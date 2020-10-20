import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector, popupImgFoto, popupImgText) {
        super(selector)
        this.setEventListeners()
        this.popupImgFoto = popupImgFoto
        this.popupImgText = popupImgText
    }

    open(imgLink, title) {
       super.open()

        this.popupImgFoto.src = imgLink
        this.popupImgText.textContent = title
    }


    setEventListeners() {
        // overlay
        this.popupElement.addEventListener('click',  this._overlayClose())

        // крестик
        this.popupElement.querySelector('.popup__close').addEventListener('click', this._figureClose())
    }
}