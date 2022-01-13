/*CONCATENACION DE VARIABLES*/

//let nombre = "";
//let edad = 0;
//let pais = "";

//let datoUsuario = nombre + edad + pais 

//console.log (datoUsuario)

/* ACA ESTAN LOS MENSAJES DE INICIO DEL HOME */
/*CICLOS HECHOS CON WHILE*/


let nombreUsuario = prompt("Ingrese su nombre")

while (((nombreUsuario >= 0)) || ((nombreUsuario === "."))) {
    alert("Ingresa un nombre valido");
    nombreUsuario = prompt("Ingrese su nombre")
}

alert("Bienvenido/a, " + nombreUsuario)
console.log(nombreUsuario)

let respPlaneta = prompt("¿Quieres subscribirte a nuestras redes?")

while ((respPlaneta == null) || (respPlaneta === ".")) {

    alert("Ingresa una respuesta valida")
    respPlaneta = prompt("¿Quieres subscribirte a nuestras redes?")

}

if (((respPlaneta == "SI") || (respPlaneta == "si") || (respPlaneta == "Si"))) {
    let correoUsu = prompt("Ingresa tu direccion de correo electronico")
    confirm("Gracias " + nombreUsuario + ". Pronto nos pondremos en contacto a: " + correoUsu)

} else if (((respPlaneta == "NO") || (respPlaneta == "no") || (respPlaneta == "No"))) {
    alert("Esperamos poder contar contigo pronto " + nombreUsuario + ".")
}


















