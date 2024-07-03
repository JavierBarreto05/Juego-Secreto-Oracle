
//dom es lo que conecta html con js?

/* Episodio de como llamar a un elemento de
let titulo = document.querySelector("h1"); //Sirve para traer un objeto de html a js agregandole una variable
titulo.innerHTML = "Juego del numero secreto"; // .innerhtml sirve para reenmplazar la sintaxis de html por una nueva

let hola = document.querySelector("p");
hola.innerHTML = "Indica un Numero del 1 al 10"; */ 

/* llamado de funcion onclick
function intentoDeUsuario() { //encapsulamiento de una accion, esta tiene que estar en el html
    //activando con el onclick
    alert("hola");
}*/
let valorSalidarecursividad = 10; //serian 10 intentos
let listaNumeroSorteados = [];
let numeroSecreto = generarNumeroSecreto(); // 4ejecuto la funcion pidiendo que me iguale la variable a lo que devuelva la funcion
let contadorIntentos = 0;

function textoElemento(Elemento , Texto) { //encapsulamiento de una accion, esta tiene que estar en el html
    let hola = document.querySelector(Elemento);
    hola.innerHTML = Texto;
    return;
}
textoElemento("h1" , "Juego del numero secreto");
textoElemento("p","Indica un Numero del 1 al 100");

function generarNumeroSecreto() {
    let numSecret = Math.floor(Math.random() * 10) + 1; // Generar número aleatorio entre 1 y 10

    //Hay que verificar si los 10 numeros se generaron, si no vamos a entrar en un bucle infinito
    if (listaNumeroSorteados.length == valorSalidarecursividad){
        textoElemento("p","Se han generado todos los numeros posibles");
    } else{ //Hacemos un if anidado

          // Verificar si el número ya fue sorteado
         if (listaNumeroSorteados.includes(numSecret)) { // Preguntar si el número ya está en la lista
         console.log(listaNumeroSorteados); // Mostrar los números sorteados hasta ahora
         return generarNumeroSecreto(); // Si el número ya existe, generar otro número
        } else {
         listaNumeroSorteados.push(numSecret); // Añadir el número al array de números sorteados
         console.log(listaNumeroSorteados); // Mostrar los números sorteados hasta ahora
         return numSecret; // Devolver el número secreto
}
    }
   
}

function verificarIntento() {
    let numeroIngresado = parseInt(document.querySelector("input").value); // con esta funcion lo selecciono
    contadorIntentos++;
    if(numeroIngresado == numeroSecreto) {
        textoElemento("p",`Acertaste en el intento ${contadorIntentos}`);
        //una vez que acertamos, si queremos jugar debemos activar el boton nuevo juego, por ello borraremos el parametro disabled
        sacarDisabled(); //
    } else if(numeroIngresado > numeroSecreto) {
        textoElemento("p",`El numero secreto es menor y vas ${contadorIntentos} ${(contadorIntentos === 1) ? "vez" : "veces"}`);
        limpiarInput
    } else{
        textoElemento("p",`El numero secreto es mayor y vas ${contadorIntentos} ${(contadorIntentos === 1) ? "vez" : "veces"}`);
        limpiarInput();
    }
    return;
}

function limpiarInput() {
    let valorCaja = document.getElementById("valorIngresado"); //con esta funcion obtengo lo que pido, pero no lo selecciono para poderlo editar
    valorCaja.value = ""; // forma corta seria document.querySelector(#"valorIngresado").value = "";*/
    return;
}

function sacarDisabled() {
    document.getElementById("reiniciar").removeAttribute("disabled"); //con esta funcion elegiremos el objeto con id reiniciar y removeremos el atributo disabled
    return;
}

function reiniciarJuego() {
    //ordenamos lo que queremos
    //mostrar mensaje de "ingresar un numero del 1 al 10"
    textoElemento("p","Indica un Numero del 1 al 100");
    //limpiar input
    limpiarInput();
    //generar numero aleatorio
    numeroSecreto = generarNumeroSecreto();
    //contador a 0
    contadorIntentos = 0; 
    //agregar el disabled al boton de reiniciar el juego
    document.getElementById("reiniciar").setAttribute("disabled","true");
//podriamos agrupar la mayoria de estos comandos para que simplemente al llamarlos se seteen las condicones iniciales
}