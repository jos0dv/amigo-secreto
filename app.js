// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// declaración de variables y arreglos
let listaAmigos = [];

// capturar la informacón en el input y agregar al arreglo
function agregarAmigo(){
    let nuevoAmigo = document.getElementById('amigo').value;
    console.log(nuevoAmigo);
    if(nuevoAmigo != ''){
        listaAmigos.push(nuevoAmigo);
    } else {
        alert('No puede haber un valor vacío')
    }
    console.log(listaAmigos);
    let mostrarAmigo = document.getElementById('listaAmigos');
    mostrarAmigo.innerHTML += `<li>${nuevoAmigo}</li>`;
}

// mostrar la lista de amigos en la parte de abajo del input


// hacer un sorteo con los avlores agregados al arreglo
function sortearAmigo(){
    let numeroAmigo = Math.floor(Math.random() * listaAmigos.length);
    console.log(numeroAmigo)
}
// mostrar el valor sorteado
