//let nombre = "";
//let edad = 0;
//let pais = "";

//let datoUsuario = nombre + edad + pais 

//console.log (datoUsuario)

let nombreUsuario =  prompt ("Ingrese su nombre")
if ((nombreUsuario >= 0) || (nombreUsuario <= 0)) {
    alert ("Por favor, ingrese un nombre valido")
    
} /*else if (nombreUsuario < 0){
    alert ("Por favor, ingrese un nombre valido")

}*/ else {
    alert ("Bienvenido/a " + nombreUsuario)
}

let respPlaneta = prompt ("¿Quieres subscribirte a nuestras redes?")

if (((respPlaneta == "SI") || (respPlaneta == "si") || (respPlaneta == "Si"))) {
    let correoUsu = prompt ("Ingresa tu direccion de correo electronico")
    alert ("Gracias " + nombreUsuario + ". Pronto nos pondremos en contacto a: " + correoUsu)
    
} else if (((respPlaneta == "NO") || (respPlaneta == "no") || (respPlaneta == "No"))) {
    alert ("Esperamos poder contar contigo pronto. Hasta pronto")
}










    




