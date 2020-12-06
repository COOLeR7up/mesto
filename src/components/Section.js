export default class Section {
    constructor({items, renderer}, selector) {
        this.items = items

        this.renderer = renderer

        this.selector = selector
    }


    addItem(title, link) {
        const card = this.renderer(title, link)
        this.selector.prepend(card.generate())
    }
}