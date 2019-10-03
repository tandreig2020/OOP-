class BaseElement {
    constructor (parent, type) {
        this.parent = parent;
        this.domElement = document.createElement(type);
    }
    render() {
        this.parent.appendChild(this.domElement);
    }
}