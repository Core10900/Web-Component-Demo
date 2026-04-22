class ImageBox extends HTMLElement {
  constructor() {
    super();
    this.render();
  }
  render() {
    const url = this.getAttribute("url");
    const name = this.getAttribute("name");
    const price = this.getAttribute("price");

    const templateEle = document.getElementById("img-box-template");
    const cloneNode = templateEle.content.cloneNode(true);
    const imgEle = cloneNode.querySelector("img");
    const nameEle = cloneNode.querySelector(".name");
    const priceEle = cloneNode.querySelector(".price");

    imgEle.src = url;
    nameEle.innerText = name;
    priceEle.innerText = `$${price}`;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(cloneNode);
  }
}

window.customElements.define("image-box", ImageBox);
