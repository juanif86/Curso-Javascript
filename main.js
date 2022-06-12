//Objetivo del Simulador: Exchange de compra de Cryptomonedas


//Definición de Variables

let nombre = prompt("Hola! Ingrese su Nombre: ");

let listaCripto = [];

let iteraciones = prompt("Ingrese cantidad de operaciones que desea realizar: ");

const precioBTC = 27000;

const precioETH = 1500;

const precioBNB = 250;






//Modulo de funciones

function saludar(nombre){
    console.log("Bienvenido "+ nombre)
}

function enviarMensaje(mensaje){
    console.log(mensaje)
}

function ingresarDatos(){
    for(let i = 0; i<iteraciones; i++){
        let nombreCripto = prompt("Ingrese criptomoneda: " )
        let monto = prompt("Ingrese monto: " )
        switch (nombreCripto.toUpperCase()){
            case "BTC":
                calcularCantidad(monto,precioBTC, nombreCripto);
                break;
            case "ETH":
                calcularCantidad(monto,precioETH, nombreCripto)  
                break;
            case "BNB":
                calcularCantidad(monto,precioBNB, nombreCripto)  
                break;
            default:
                alert("Dato incorrecto")
        }
        let compra = new Cripto(nombreCripto,)
    }
}

function calcularCantidad(monto, precio, nombreCripto){
    cantidad = monto/precio;
    console.log("Felicitaciones! compraste "+cantidad+ " " +nombreCripto.toUpperCase()+" a un precio de USD"+precio)
    return cantidad
}

/* registrar(){
    console.log("Usted compro "+ this.nombreCripto +" a USD" + this.precioCripto)
}
 */


//Constructor de Objetos (Clase)

class Cripto{
    constructor(nombreCripto, precioCripto){
        this.nombreCripto = nombreCripto.toUpperCase();
        this.precioCripto = parseInt(precioCripto);
    }    
}

let btc = new Cripto("BTC",precioBTC);
let bnb = new Cripto("BTC",precioBNB);
let eth = new Cripto("BTC",precioETH);




//Desarrollo

saludar(nombre.toUpperCase());
enviarMensaje("Este es un simulador de compra de Criptomonedas. Puede elegir entre BTC, ETH o BNB");
ingresarDatos();

console.log(btc)
console.log(bnb)
console.log(eth)
