class Title extends BaseElement {
    constructor (parent, text) {
        super(parent, "h2");
        this.domElement.textContent = text;
    }
}