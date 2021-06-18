"use strict";

/* crear una función que me diga si un string comienza con vocal, consonante, número o un caracter especial
*/

/*
    input: anaconda
    output: true

    input: belzeebub
    output: true

    input: koder
    output: false

    input: cerveza
    output: false
*/
var string = prompt("Ingresa una cadena...");
var character_start = string.charAt(0);
console.log(character_start); //Delimitamos si es una letra

function isCharacterALetter(character_start) {
  return /[a-zA-Z]/.test(character_start);
}

function isVowel(character_start) {
  character_start = character_start.toLowerCase();
  return /[aeiou]/.test(character_start);
}

function isNumber(character_start) {
  return /[0123456789]/.test(character_start);
}

switch (isCharacterALetter(character_start)) {
  case true:
    //Accede si es una letra 
    //determinamos si es una vocal 
    if (isVowel(character_start)) {
      console.log("El string ".concat(string, " inicia con una vocal, la cual es ").concat(character_start));
    } else {
      //Si no es vacal, entonces es una constante =)
      console.log("El string ".concat(string, " inicia con una constante, la cual es ").concat(character_start));
    }

    break;

  case false:
    //Puede que sea un número o un caracter especial
    //Comprobamos el tipo de dato para determinar si es numero
    if (isNumber(character_start)) {
      // Hey! Tenemos un número aquí
      console.log("El string ".concat(string, " inicia con un n\xFAmero, el cual es ").concat(character_start));
    } else {
      //Tenemos a un caracter especial
      console.log("El string ".concat(string, " inicia con un caracter especial, el cual es ").concat(character_start));
    }

    break;
}