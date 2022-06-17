//Objetivo del Simulador: Exchange de compra de Cryptomonedas


//Definición de Variables

let nombre = prompt("Hola! Ingrese su Nombre: ");

let listaCripto = [];//creo array vacio

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
                listaCripto.push(new Compra(nombreCripto,monto,cantidad));//Agrego la compra como un objeto al array
                break;
            case "ETH":
                calcularCantidad(monto,precioETH, nombreCripto)  
                listaCripto.push(new Compra(nombreCripto,monto,cantidad));//Agrego la compra como un objeto al array
                break;
            case "BNB":
                calcularCantidad(monto,precioBNB, nombreCripto)  
                listaCripto.push(new Compra(nombreCripto,monto,cantidad));//Agrego la compra como un objeto al array
                break;
            default:
                alert("Dato incorrecto")
        }
    }
}

function calcularCantidad(monto, precio, nombreCripto){
    cantidad = monto/precio;
    console.log("Felicitaciones! compraste "+cantidad+ " " +nombreCripto.toUpperCase()+" a un precio de USD"+precio)
    return cantidad
}


//Constructor de Objetos (Clase)

//Objeto Cripto (producto disponible y su precio)

class Cripto{
    constructor(nombreCripto, precioCripto){
        this.nombreCripto = nombreCripto.toUpperCase();
        this.precioCripto = parseInt(precioCripto);
    }    
}

//Objeto Compra (producto comprado y monto gastado)

class Compra{
    constructor(nombreCripto, montoCripto, cantidad){
        this.nombreCripto = nombreCripto.toUpperCase();
        this.montoCripto = parseFloat(montoCripto);
        this.cantidad = cantidad;
    }    
}







//Desarrollo

saludar(nombre.toUpperCase());
enviarMensaje("Este es un simulador de compra de Criptomonedas. Puede elegir entre BTC, ETH o BNB");
ingresarDatos();



console.log(listaCripto)
