let boton=document.getElementById("boton");
boton.addEventListener("click",function(event){
    event.preventDefault();

    let nuevoid=document.createElement("div");
    nuevoid.innerHTML="div creado";
    nuevoid.classList.add("borde-negro");
    let contenido=document.getElementById("ResultadoDiv");
    contenido.appendChild(nuevoid);
})
