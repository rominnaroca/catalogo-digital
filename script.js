const contenedor = document.getElementById("catalogo");

productos.forEach(p => {

  const esVendido = p.etiqueta === "VENDIDO";

  contenedor.innerHTML += `
    <div class="producto ${esVendido ? 'vendido' : ''}">
      
      ${p.etiqueta ? `<span class="etiqueta ${p.etiqueta.toLowerCase()}">${p.etiqueta}</span>` : ""}

      <img src="${p.imagen}" onclick="abrirImagen('${p.imagen}')">

      <h2>${p.nombre}</h2>
      <p>${p.descripcion}</p>
      <strong>${p.precio}</strong><br>

      ${!esVendido ? `
        <a class="btn-wsp"
           href="https://wa.me/59176601251?text=Hola! Me interesa el producto: ${p.nombre}"
           target="_blank">
           Pedir por WhatsApp
        </a>
      ` : `<p class="texto-vendido">Producto vendido</p>`}

    </div>
  `;
});

function abrirImagen(src) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("imgModal").src = src;
}

function cerrarImagen() {
  document.getElementById("modal").style.display = "none";
}

