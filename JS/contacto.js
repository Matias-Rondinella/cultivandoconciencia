let edad = prompt("¿Cuantos años tienes?")
edad=parseInt(edad)

while (edad <=17) {
    alert ("Acceso restringido. Eres menor de edad")
    edad = prompt("¿Cuantos años tienes?")     
}
alert("Dejanos tu consulta y pronto nos comunicaremos")