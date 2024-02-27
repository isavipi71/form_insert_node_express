const boton = document.querySelector("button");
const divInsert= document.querySelector("div");

boton.addEventListener("click",  () => {
    const input = document.querySelector("input");
    if (input.value === " "){
        divInsert.innerHTML = "No hay nada";
    } else{
        const url = "http://localhost:3000/insertar_en_BD";

        fetch(url, {
            method:"post",
            headers:{'Content-Type': 'application/json'},
            body: JSON.stringify({
                "email" : input.value
            })
        })
        .then(res => res.json())
        .then(mensaje => divInsert.innerHTML = mensaje)
    }
});
