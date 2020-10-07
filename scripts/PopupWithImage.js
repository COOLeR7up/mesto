import Popup from "./Popup";
import {popupImgFoto, popupImgText} from "./constants";

export default class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector)
    }

    open = (imgLink, title) =>  {
       super.open()

        popupImgFoto.src = imgLink
        popupImgText.textContent = title
    }
}