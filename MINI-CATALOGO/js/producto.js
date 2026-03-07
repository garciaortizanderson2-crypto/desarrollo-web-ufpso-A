const productos = [
    {
        nombre: "Laptop",
        descripcion: "Laptop para trabajo y estudio",
        precio: 5000000,
        imagen: "img/laptop.jpg"
    },
    {
        nombre: "Mouse",
        descripcion: "Mouse inalámbrico",
        precio: 200000,
        imagen: "img/mouse.jpg"
    },
    {
        nombre: "Teclado",
        descripcion: "Teclado mecánico",
        precio: 300000,
        imagen: "img/teclado.jpg"
    }
];

const catalogo = document.getElementById("catalogo");

productos.forEach(producto => {
    const card = document.createElement("producto-card");

    card.setAttribute("nombre", producto.nombre);
    card.setAttribute("descripcion", producto.descripcion);
    card.setAttribute("precio", producto.precio);
    card.setAttribute("imagen", producto.imagen);

    catalogo.appendChild(card);
});