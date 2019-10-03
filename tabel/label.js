class Label extends BaseElement {
    constructor (parent, text, htmlFor) {
        super(parent, "label");
        this.domElement.textContent = text;
        this.domElement.htmlFor = htmlFor;
        this.domElement.style.display = "block";
        this.domElement.style.marginTop = "10px";
    }
}