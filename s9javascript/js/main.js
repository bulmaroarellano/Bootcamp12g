//alert("hola koders!")
/*console.log("hola koders desde consola")
console.error("Houston, tenemos un problema")
console.warn("cuidado!")
console.log()
*/
//prompt("Ingresa tu nombre:")

/*
    operadores de asignación:
    = -> Asignación
    += -> Asignación con adición
    -= -> Asignación con sustracción
    *= -> Asignación con multiplicación
    /= -> Asignación con división
    %= -> Asignación con módulo
*/

var foo /*declaración*/

foo = "Lestat" /* asignación */

/*
var name = prompt("ingresa tu nombre")
var lastName = prompt("Ingresa tu apellido")

console.log( name )
console.log( lastName )

console.log('nombre completo: ' + name +  lastName )

var age = 31

console.log( typeof name )
console.log( typeof age )
*/
var someNumber = 5
var someOtherNumber = 7
/*
console.log( someNumber + someOtherNumber )
console.log( someNumber - someOtherNumber )
console.log( someNumber * someOtherNumber )
*
//console.log( someNumber / someOtherNumber )
//console.log( someNumber % someOtherNumber )

var thirdNumber = "37"

//console.log( someNumber + thirdNumber )
//console.log( thirdNumber + someNumber )

/*operadores de comparación:

== comparación
=== extrema comparación
!= diferente
!== extremadamente diferente
> mayor que 
< menor que
>= mayor o igual que
<= menor o igual que
*/

var testNumber = 12
var testStringNumber = "12"

//console.log( testNumber == testStringNumber)
/*true*/

//console.log( testNumber === testStringNumber)
/*false*/

//console.log( testNumber != testStringNumber )
/*false*/

//console.log( testNumber !== testStringNumber )
/*true*/

var string1 = "a"
var string2 = "b"

//console.log(   string1 > string2 )
/*true ( comparación lexicográfica )*/

/*ejercicio 1:
pedir 2 números al usuario y mostrar en consola el resultado de aplicar todas las operaciones aritméticas entre esos dos números*/

/*
    ejercicio 2:
    pedir al usuario dos números y escribir en consola si el primer número es mayor que el segundo
*/

/*
    ejercicio 3:
    pedir al usuario dos letras, y determinar si la primera apare antes o después en el alfabeto
    */

    var numero1 = prompt("ingresa un numero...")
var numero2 = prompt("ingresa un segundo numero...")
if(!(typeof(numero1)=='number'  & typeof(numero2)=='number')){
    numero1=parseInt(numero1)
    numero2=parseInt(numero2)
    }
console.log('La suma da como resultado: ' + numero1 + numero2 )
console.log('La resta sería ' + numero1 - numero2 )
console.log( 'La multiplicacion: ' + numero1 * numero2 )

 

if (numero1 > numero2) {
  console.log("El numero " + numero1 + " es mayor que el segundo numwero " + numero2)  
} else {
    console.log("El numero " + numero2 + " es mayor que el  numwero " + numero1)  
}

    var letra1 = prompt("ingresa un caracter...")
    var letra2 = prompt("ingresa un caracter...")
if (letra1 > letra2) {
    console.log("El caracter " + letra1 + " es mayor que el segundo catacter " + letra2)  
} else {
    console.log("El caracter " + letra2 + " es mayor que el caracter " + letra1)  
}