import {cardsList} from './constants.js'
import Card from "./Card.js";


export default class Section {
    constructor({items, renderer}, selector) {
        this.items = items
        this.renderer = renderer

        this.selector = document.querySelector(selector)
    }


    renderer(title, link) {
        const templateSelector = '.element-template'
        const card = new Card(title, link, templateSelector)

        return card
    }


    addItem() {
        this.items.forEach(i => {
            const card = this.renderer(i.title, i.link)
            cardsList.prepend(card.generate())
        })
    }
}