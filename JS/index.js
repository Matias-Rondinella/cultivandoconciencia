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


//

function Impuestos (precioCosto, iva) {
    
    precioFinal = parseFloat (precioCosto * iva); 
    console.log (precioFinal);
    
}
Impuestos (175, 1.21);

//
function stockTotal(stock, vendido,) {

    total = parseInt (stock - vendido);
    
    if (total < 0) {
        console.log ("Stock Agotado.")
        console.log ("Stock disponible: " + stock + " Unidades");
    } else if (total >= 0) {
        console.log ("Producto Agregado");
        console.log ("Agregaste: " + vendido + " productos."); 
        console.log ("Quedan " + total + " productos.");       
    }
    
    
}

stockTotal (5, 2);



function Descript(detalles, productor,) {

    caract = detalles + productor;

    console.log(caract);   
    
}
Descript("Vino Organico Bla, " + "Agroecológicos MG.");

//



















