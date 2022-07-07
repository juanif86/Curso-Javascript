//Objetivo del Simulador: Exchange de compra de Cryptomonedas

//Definición de variables y arrays

let usuario;
let usuarioEnLS = localStorage.getItem('usuario'); 

let logInBtn = document.getElementById("log-in")
let logOutBtn = document.getElementById("log-out")
let nameInput = document.getElementById("name")

if (usuarioEnLS != null) {
    usuario = usuarioEnLS
} else{
    usuario = nameInput.value
    localStorage.setItem('usuario', usuario)
}
document.getElementById("bienvenida").innerHTML = `Bienvenido a nuestro Exchange de compra de Criptomonedas`



logOutBtn.addEventListener('click', ()=>{
    localStorage.removeItem('usuario');
    logOutBtn.style.visibility = "hidden"
    nameInput.style.visibility = "visible"
    logInBtn.style.visibility = "visible"
    document.getElementById("bienvenida").innerHTML = `Bienvenido a nuestro Exchange de compra de Criptomonedas. Por favor ingrese su nombre`
})

logInBtn.addEventListener('click', ()=>{
    usuario = nameInput.value
    localStorage.setItem('usuario', usuario)
    logInBtn.style.visibility = "hidden"
    nameInput.style.visibility = "hidden"
    logOutBtn.style.visibility = "visible"
    document.getElementById("bienvenida").innerHTML = `Bienvenido <b>${usuario}!</b> a nuestro Exchange de compra de Criptomonedas`
})

const productos = [
    {id: 0, nombre: "BTC", precio: 20000},
    {id: 1, nombre: "ETH", precio: 1200},
    {id: 2, nombre: "BNB", precio: 200}
]; //Array que contiene los Productos

carrito = []; //Array que contiene las compras



let boton = document.getElementById("boton")
boton.addEventListener("click", getData)


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

//Función que muestra los precios 

function pintaCard(array){
    array.forEach(producto=>{
        let card = document.getElementById("card")
        card.innerHTML = `
                            <div class="card text-center" style="max-width: 200px" margin: auto auto>
                            <div class="card-header">${producto.nombre}</div>
                                <div class="card-body">
                                    <h5 class="card-title">Precio</h5>
                                    <p class="card-text">USD ${producto.precio}</p>
                                </div>
                            </div>           
            `
        row.append(card); 
        })
}




//Función que toma los datos del form, calcula la compra y arma el carrito
function getData(){
    event.preventDefault()
    let criptoComprada = document.getElementById("cripto").value;
    let monto = parseInt(document.getElementById("monto").value);
        switch (criptoComprada.toUpperCase()){
            case "BTC":
                calcularCantidad(monto,productos[0].precio);
                carrito.push(new Compra(criptoComprada,monto,cantidad));//Agrego la compra como un objeto al array
                console.log("compro btc", cantidad);
                console.log( "Felicitaciones! compraste "+cantidad+ " "+productos[0].nombre );
                listarCompra(cantidad, productos[0].nombre)
                break;
            case "ETH":
                console.log("compro eth")
                calcularCantidad(monto,productos[1].precio)  
                carrito.push(new Compra(criptoComprada,monto,cantidad));//Agrego la compra como un objeto al array
                console.log( "Felicitaciones! compraste "+cantidad+ " "+productos[1].nombre );
                listarCompra(cantidad, productos[1].nombre)
                break;
            case "BNB":
                console.log("compro bnb")
                calcularCantidad(monto,productos[2].precio)  
                carrito.push(new Compra(criptoComprada,monto,cantidad));//Agrego la compra como un objeto al array
                console.log( "Felicitaciones! compraste "+cantidad+ " "+productos[2].nombre );
                listarCompra(cantidad, productos[2].nombre)
                break;
            default:
                alert("Dato incorrecto")
        }
}

//Función que lista las compras
function listarCompra(cant, nom){
    let lista = document.createElement("ul");
    lista.innerHTML = `<li>Felicitaciones! compraste ${cant} ${nom}</li>`;
    document.body.append(lista);    
}

//Función que calcula cantidad comprada
function calcularCantidad(monto, precio){
    cantidad = monto/precio;
        return cantidad
}


//Desarrollo
pintaCard(productos);

