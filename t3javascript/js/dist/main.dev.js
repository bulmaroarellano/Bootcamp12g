"use strict";

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
var foo;
/*declaración*/

foo = "Lestat";
/* asignación */

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

var someNumber = 5;
var someOtherNumber = 7;
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

var testNumber = 12;
var testStringNumber = "12"; //console.log( testNumber == testStringNumber)

/*true*/
//console.log( testNumber === testStringNumber)

/*false*/
//console.log( testNumber != testStringNumber )

/*false*/
//console.log( testNumber !== testStringNumber )

/*true*/

var string1 = "a";
var string2 = "b"; //console.log(   string1 > string2 )

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

/*
var x = 0

var opcion = parseInt(prompt('Ingresa un numero del 1 al 3'))
switch (opcion) {
    case 1:
        function comparaLongitug2Strings(string1, string2) {
            var longitudString1 = string1.lenght
            var longitudString2 = string2.length
            return longitudString2 > longitudString1 ? string2 : string1;
        }
        var string_cadena1 = prompt("ingresa una cadena...")
        var string_cadena2 = prompt("ingresa  otra cadena...")
        var stringResultado = comparaLongitug2Strings(string_cadena1, string_cadena2)

        alert("El string " + stringResultado + " es más largo... ")
        break;
    case 2:
        const cadena = prompt("ingresa  otra cadena...")
        var cadenaConversa = ""

        function InvierteMiCadena(cadena) {
            var invertida = ""

            for (x = cadena.length - 1; x >= 0; x--) {
                invertida += cadena.charAt(x)
            }
            return invertida
        }
        console.log("Cadena invertida: " + InvierteMiCadena(cadena))
        break;
    case 3:
        var datacadena = prompt("ingresa  otra cadena...");

        function intercalandoMayusMinus(datacadena) {
            for (x = 0; x < datacadena.length; x++) {
                cadenaConversa += x % 2 == 0 ? datacadena.substr(x, 1).toLowerCase() : datacadena.substr(x, 1).toUpperCase();
            }
            return cadenaConversa

        }
        console.log(datacadena + ' <<<>>> ' + intercalandoMayusMinus(datacadena))
        break;
    default:
        //Declaraciones ejecutadas cuando ninguno de los valores coincide con el valor de la expresión
        break;
}*/

/*
var string_cadena = prompt("ingresa una cadena...")
console.log(string_cadena.length);
function contadorVocales(string_cadena){
    var i,j,x;
    j=0;
    for(i=0;i<string_cadena.length;i++){
        x = string_cadena.charAt(i);
       if (x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u'){
        j++
      }
    }
    return j;
}

console.log("El número de vocales en la cadena " + string_cadena + ' es de ' + contadorVocales(string_cadena))
 

function compruebaValidez(result){
    var j, k, idx;
    j=0
     var boolean = true;
    while(j<result.length&&boolean){
        k = result.charAt(j)
        idx = result.indexOf(k,j);
        if(!idx===-1){ 
            boolean=false;
            return boolean;
        }
        j++
    } 
    return 1;
}
 
function getRandomString(length) {
    var randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for ( var i = 0; i < length; i++ ) {
        result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
    }

if(!compruebaValidez(result)){
    getRandomString(length)
    }else {
        return result;
    }
}

 
var n = parseInt(prompt("De a cómo de largo joven... ?? "))
console.log(getRandomString(n));
*/

var cadena = prompt("Dame un string");
cadena = cadena.replace(/(^\s*)|(\s*$)/gi, "");
cadena = cadena.replace(/[ ]{2,}/gi, " ");
cadena = cadena.replace(/\n /, "\n");
var palabras = cadena.split(" ");
console.log("La cadena " + cadena + " contiene " + palabras.length + " palabra(s)");