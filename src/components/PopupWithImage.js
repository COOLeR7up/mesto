import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selector, popupImgFoto, popupImgText) {
        super(selector)
        super.setEventListeners()
        this.popupImgFoto = popupImgFoto
        this.popupImgText = popupImgText
    }


    open(imgLink, title) {
       super.open()

        this.popupImgFoto.src = imgLink
        this.popupImgText.textContent = title
    }
}