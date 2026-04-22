import { hashPassword, encryptData, decryptData } from "../Javasript/cryptoUtils.js";


document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("nfForm");
  const hashResult = document.getElementById("hashResult");
  const modal = document.getElementById("modal");
  const closeBtn = document.getElementById("closeBtn");

  let show = false;


  form.addEventListener("submit", async (event) => {

    event.preventDefault();
    show = true;
    const password = "contrseña123"

    const nombre = document.getElementById("nfNombre").value;
    const correo = document.getElementById("nfCorreo").value;
    const telefono = document.getElementById("nfTelefono").value;
    const origen = document.getElementById("nfOrigen").value;
    const nombreEncriptado = await encryptData(nombre, password)
    const correoEncriptado = await encryptData(correo, password)
    const telefonoEncriptado = await encryptData(telefono, password)
    const origenEncriptado = await encryptData(origen, password)


    hashResult.innerHTML = `

                
        <strong>Nombre Encriptado:</strong><br>
       <div style="font-size: 11px; background: white; padding: 8px; border-radius: 4px; margin-top: 5px; word-break: break-all;">
        ${nombreEncriptado}
       </div>
        <strong>Telefono Encriptado:</strong><br>
       <div style="font-size: 11px; background: white; padding: 8px; border-radius: 4px; margin-top: 5px; word-break: break-all;">
        ${telefonoEncriptado}
       </div>
       <strong>Correo Encriptado:</strong><br>
       <div style="font-size: 11px; background: white; padding: 8px; border-radius: 4px; margin-top: 5px; word-break: break-all;">
        ${correoEncriptado}
       </div>
      <strong>Origen Encriptado:</strong><br>
       <div style="font-size: 11px; background: white; padding: 8px; border-radius: 4px; margin-top: 5px; word-break: break-all;">
        ${origenEncriptado}
       </div>

    `

    if(show){
      modal.showModal();
    }
        
    closeBtn.addEventListener("click", () => modal.close());




  });

});






// console.log("Nombre:", nombre);
// console.log("Correo:", correo);
// console.log("Telefono:", telefono);
// console.log("Origen:", origen);
// console.log("Nombre Encriptado", nombreEncriptado);
// console.log("Correo Encriptado", correoEncriptado);
// console.log("Telefono Encriptado", telefonoEncriptado);
// console.log("Origen Encriptado", origenEncriptado);
