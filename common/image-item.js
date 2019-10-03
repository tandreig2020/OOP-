class ImageItem extends BaseElement {
  constructor(parent, src) {
    super(parent, "img");
    this.domElement.src = src;
    this.domElement.style.maxWidth= "100px";
    this.domElement.onerror = function() {
      this.src = "https://dummyimage.com/60x60/c257c2/ffffff.jpg&text=No+Image";
    };
  }
}
