/*CONCATENACION DE VARIABLES*/

//let nombre = "";
//let edad = 0;
//let pais = "";

//let datoUsuario = nombre + edad + pais 

//console.log (datoUsuario)

/* ACA ESTAN LOS MENSAJES DE INICIO DEL HOME */
/*CICLOS HECHOS CON WHILE*/ 


/* let nombreUsuario = prompt("Ingrese su nombre")

while (((nombreUsuario >= 0) || (nombreUsuario === ".")) || (nombreUsuario === null)) {
    alert("Ingresa un nombre valido");
    nombreUsuario = prompt("Ingrese su nombre")
}

alert("Bienvenido/a, " + nombreUsuario)
console.log(nombreUsuario)

let subsQ = prompt("¿Quieres subscribirte a nuestras redes?")

while (((subsQ === null) || (subsQ === ".")) || (subsQ <= 0)) {

    alert("Ingresa una respuesta valida")
    subsQ = prompt("¿Quieres subscribirte a nuestras redes?")

}

if (((subsQ == "SI") || (subsQ == "si") || (subsQ == "Si"))) {

    let correoUsu = prompt("Ingresa tu direccion de correo electronico")   

    while (((correoUsu === "") || ((correoUsu >= 0)) || ((correoUsu === "ESC")) || (correoUsu === null))) {

        alert("ingresa un email valido")
        correoUsu = prompt ("Ingresa tu email de nuevo");

    }   

confirm("Gracias " + nombreUsuario + ". Pronto nos pondremos en contacto a: " + correoUsu);
console.log (correoUsu);   
    
} else if (((subsQ == "NO") || (subsQ == "no") || (subsQ == "No"))) {
    alert("Esperamos poder contar contigo pronto " + nombreUsuario + ".")
    
} */


// FUNCIONES //

// Funcion para controlar stock
function stockTotal(stock, vendido,) {

    total = parseInt (stock - vendido);    
    
    if (total >= 0) {
        console.log ("Productos Agregados");
        console.log ("Vendiste: " + vendido + " productos."); 
        console.log ("Quedan " + total + " productos.");       
    }else if (total < 0) {
        console.log("Stock Insuficiente o Agotado.");
        console.log ("stock disponible: " + stock);        
    }   
}

let vendido = Number (prompt("Ingrese unidades vendidas"));
let stock = 5;
while (vendido > stock) {
    alert ("Stock Insuficiente o Agotado.");
    alert ("stock disponible: " + stock);
    vendido = prompt ("Ingresar hasta " + stock + " unidades");        
}

//Funcion para descripcion de productos

function Descript(detalles, tipo, productor,) {

    caract = detalles + tipo + productor;

    console.log(caract);   
    
}

// Funcion para sacar IVA de un producto y precio total.


function Impuestos (precioCosto, iva) {
    
    precioFinal = parseFloat (precioCosto * iva);
    console.log ("Precio: $_" + precioFinal); 

    
}


// Funcion para saber el valor de la Venta Total

function Multip (vendido, precioFinal,) {
    ventaTot = parseFloat (vendido * precioFinal);
    console.log ("Venta Total: $_" + ventaTot);    
}

Descript("Producto de la economia familiar, " + "Vino Orgánico Malbec, " + "Agroecológicos Mg");
Impuestos (500, 1.21);
stockTotal (stock, vendido);
Multip (vendido, 500 * 1.21);



















