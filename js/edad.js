var nombre = prompt ("Hola! Ingrese su nombre, por favor: ", "")
var edad = parseInt (prompt ( "Ahora, ingrese su edad: ", "" ) )

if (edad >= 18) {
 alert ( nombre + ", bienvenida/o a La Ruta del Vino.")
}
else {
 alert ( nombre + ", sos menor de edad para visitar esta página. Por favor, pedile a un mayor que te acompañe o te autorice. Gracias!")
}
