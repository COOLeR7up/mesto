import Card from "./Card.js";

export default class Section {
    constructor({items, renderer}, selector, imageViewPopup) {
        this.items = items

        this.renderer = renderer

        this.selector = selector
        this.imageViewPopup = imageViewPopup
    }


    addItem(title, link) {
        const card = this.renderer(title, link)
        this.selector.prepend(card.generate(this.imageViewPopup))
    }
}