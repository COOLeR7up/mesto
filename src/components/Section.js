export default class Section {
    constructor({items, renderer}, selector) {
        this.items = items

        this.renderer = renderer

        this.selector = selector
    }


    addItem(title, link, likes, id, ownerId) {


        const card = this.renderer(title, link, likes, id, ownerId)

        this.selector.prepend(card.generate())
    }
}