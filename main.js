//Objetivo del Simulador: Exchange de compra de Cryptomonedas


//Definición de Variables

let nombre = prompt("Hola! Ingrese su Nombre: ");

const carrito = [];//creo array vacio

const panel = [];//creo array vacio

let iteraciones = prompt("Ingrese cantidad de operaciones que desea realizar: ");

const precioBTC = 27000;

const precioETH = 1500;

const precioBNB = 250;

//Constructor de Objetos (Clase)

//Objeto Cripto (producto disponible y su precio)

class Cripto {
    constructor(nombreCripto, precioCripto){
        this.nombreCripto = nombreCripto.toUpperCase();
        this.precioCripto = parseInt(precioCripto);
    }    
}

//Objeto Compra (producto comprado y monto gastado)

class Compra{
    constructor(criptoComprada, monto, cantidad){
        this.criptoComprada = criptoComprada.toUpperCase();
        this.monto = parseFloat(monto);
        this.cantidad = cantidad;
    }    
}

//Modulo de funciones

function saludar(nombre){
    console.log("Bienvenido "+ nombre)
}

function enviarMensaje(mensaje){
    console.log(mensaje)
}

function mostrarPanel(e){
    panel.forEach( (e) => {
      console.log(e)
    })
  }

function calcularCantidad(monto, precio){
    cantidad = monto/precio;
        return cantidad
}

function ingresarDatos(){
    for(let i = 0; i<iteraciones; i++){
        let criptoComprada = prompt("Ingrese criptomoneda: " );
        let monto = parseInt(prompt("Ingrese monto: " ));

        switch (criptoComprada.toUpperCase()){
            case "BTC":
                calcularCantidad(monto,precioBTC);
                carrito.push(new Compra(criptoComprada,monto,cantidad));//Agrego la compra como un objeto al array
                break;
            case "ETH":
                calcularCantidad(monto,precioETH)  
                carrito.push(new Compra(criptoComprada,monto,cantidad));//Agrego la compra como un objeto al array
                break;
            case "BNB":
                calcularCantidad(monto,precioBNB)  
                carrito.push(new Compra(criptoComprada,monto,cantidad));//Agrego la compra como un objeto al array
                break;
            default:
                alert("Dato incorrecto")
        }
    }
}

function mostrar(array) {
    for (let i=0; i<array.length; i++){
        console.log( "Felicitaciones! compraste "+array[i].cantidad+ " "+array[i].criptoComprada );
    }
}





//Desarrollo


btc = panel.push(new Cripto("BTC",precioBTC));
eth = panel.push(new Cripto("ETH",precioETH));
bnb = panel.push(new Cripto("BNB",precioBNB));
saludar(nombre.toUpperCase());
enviarMensaje("Este es un simulador de compra de Criptomonedas. Puede elegir entre BTC, ETH o BNB");
mostrarPanel();
ingresarDatos();
mostrar(carrito);






