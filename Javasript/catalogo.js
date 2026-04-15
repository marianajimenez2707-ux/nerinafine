
  // Lista para guardar los libros del carrito
  const carrito = [];

  // Función para agregar libros al carrito
  function comprasProd(nombre, precio, cantidad) {
   // const cantidadTexto = document.getElementById(cantidadId).value;
   // const cantidad = parseInt(cantidadTexto);

    // Validación simple
    if (cantidad === "" || cantidad <= 0) {
      alert("Por favor, ingresa una cantidad válida.");
      return;
    }

    // Buscar si el libro ya está en el carrito
    let existe = false;
    for (let i = 0; i < carrito.length; i++) {
      if (carrito[i].nombre === nombre) {
        carrito[i].cantidad = carrito[i].cantidad + cantidad;
        existe = true;
        break;
      }
    }

    // Si no existe, lo agregamos
    if (!existe) {
      carrito.push({
        nombre: nombre,
        precio: precio,
        cantidad: cantidad
      });
    }

    alert("Producto agregado: " + nombre + " (Cantidad: " + cantidad + ")");
  }
  

  // Función para mostrar el carrito
  function mostrarCarrito() {
    if (carrito.length === 0) {
      alert("Tu carrito está vacío.");
      return;
    }

    let mensaje = "Carrito de Compras:\n\n";
    let total = 0;

    for (let i = 0; i < carrito.length; i++) {
      const producto = carrito[i];
      const subtotal = producto.precio * producto.cantidad;
      mensaje += producto.nombre + "\nCantidad: " + producto.cantidad + "\nPrecio: $" + producto.precio + "\nSubtotal: ₡" + subtotal + "\n\n";
      total += subtotal;
    }

    mensaje += "Total a pagar: $<   " + total;
    alert(mensaje);
  }