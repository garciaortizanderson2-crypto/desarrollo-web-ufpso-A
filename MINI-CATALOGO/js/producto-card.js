class ProductoCard extends HTMLElement {
  connectedCallback() {
    const nombre = this.getAttribute("nombre");
    const descripcion = this.getAttribute("descripcion");
    const precio = this.getAttribute("precio");
    const imagen = this.getAttribute("imagen");

    this.innerHTML = `
      <div class="card">
        <img src="${imagen}" width="150">
        <h3>${nombre}</h3>
        <p>${descripcion}</p>
        <span>$${precio}</span>
      </div>
    `;
  }
}

customElements.define("producto-card", ProductoCard);