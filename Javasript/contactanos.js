document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("nfForm");

  form.addEventListener("submit", (event) => {

    event.preventDefault(); 

    const nombre = document.getElementById("nfNombre").value;
    const correo = document.getElementById("nfCorreo").value;
    const telefono = document.getElementById("nfTelefono").value;
    const origen = document.getElementById("nfOrigen").value;

    console.log("Nombre:", nombre);
    console.log("Correo:", correo);
    console.log("Telefono:", telefono);
    console.log("Origen:", origen);

  });

});