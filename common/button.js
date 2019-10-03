class Button extends BaseElement {
    constructor (parent, content, callback) {
        super(parent, "button");
        this.domElement.innerHTML = content;
        this.domElement.onclick = callback;
    }
}