import Popup from "./Popup.js";

import {popupImgFoto, popupImgText} from "./constants.js";


export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector)
    }

    open(imgLink, title) {
       super.open()

        popupImgFoto.src = imgLink
        popupImgText.textContent = title
    }
}