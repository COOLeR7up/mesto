import Card from "./Card.js";

import {cardsList} from './constants.js'


export default class Section {
    constructor({items, renderer}, selector) {
        this.items = items
        // this.renderer = renderer

        this.selector = document.querySelector(selector)
    }


    renderer(title, link) {
        const templateSelector = '.element-template'
        const card = new Card(title, link, templateSelector)

        return card
    }

    addItem(title, link) {
        const card = this.renderer(title, link)
        cardsList.prepend(card.generate())
    }
}