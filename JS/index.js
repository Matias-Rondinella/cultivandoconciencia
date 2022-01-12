//let nombre = "";
//let edad = 0;
//let pais = "";

//let datoUsuario = nombre + edad + pais 

//console.log (datoUsuario)

//<<<<<<< HEAD
/*prompt de inicio en index*/

/* alert ("Bienvenidos a nuestra comunidad")
let nombreUsuario = prompt ("¿Cual es tu nombre?")
alert ("Bienvenido/a " + nombreUsuario)
console.log(nombreUsuario)


if (nombreUsuario == ""){
    alert ("No ingresaste un nombre")

}
else if () {
    alert ("Ingresa un nombre valido")
}
else{
    prompt (nombreUsuario + "," + " ¿Quieres aprender a cuidar mejor de nuestro planeta?")
    alert ("Pues manos a la obra")
}*/
//=======



let nombreUsuario =  prompt ("Ingrese su nombre")

while (nombreUsuario >= 0) {
    alert ("Ingresa un nombre valido");
    nombreUsuario=prompt ("Ingrese su nombre")    
}

alert ("Bienvenido, " + nombreUsuario)

let respPlaneta = prompt ("¿Quieres subscribirte a nuestras redes?")

while (respPlaneta == null) {
    alert (nombreUsuario + " Esperamos poder contar contigo pronto.")
    break;
    
}

if (((respPlaneta == "SI") || (respPlaneta == "si") || (respPlaneta == "Si"))) {
    let correoUsu = prompt ("Ingresa tu direccion de correo electronico")
    alert ("Gracias " + nombreUsuario + ". Pronto nos pondremos en contacto a: " + correoUsu)
    
} else if (((respPlaneta == "NO") || (respPlaneta == "no") || (respPlaneta == "No"))) {
    alert (nombreUsuario + " Esperamos poder contar contigo pronto.")
}












    





