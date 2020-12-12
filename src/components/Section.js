export default class Section {
    constructor({items, renderer}, selector) {
        this.items = items

        this.renderer = renderer

        this.selector = selector
    }


    addItem(title, link, likes, id) {
        const card = this.renderer(title, link, likes, id)

        this.selector.append(card.generate())
    }
}