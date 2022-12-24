

//Ejercicios//
//Escribir una oración o texto por consola (que cuente lo que quieran)
//La oración o texto debe estar compuesto por 3 variables, 3 constantes. Y al menos 3 tipos de datos.


//var name = "Jotaro"
//var age = "23"
//var pet = "Soda"
//const lastName = "Kujo"
//const hobby = "skating"
//const weather = "lluviosos"


//`Mi nombre es ${name}, de apellido ${lastName} y tengo ${age} años, mi gato se llama ${pet} y me encanta hacer ${hobby}en los días ${weather}`


//Ejercicios//
//1
//Defina una función hello que devuelva 'Hello world!'. 
//Imprimirla en consola con un string que nos calare que ejercicio es.

function hello () {
    return `Hello world!`;
}
var greeting = hello()
// console.info(greeting)

//2
//Defina dos funciones.
//La primera función a debería devolver 'Hello a!'y la segunda función b debería devolver 'Hello b!'.
//Imprimirla en consola con un string que nos calare que ejercicio es.

function helloA () {
    return `Hello a!`;
}

var greetingA = helloA()

function helloB (greeting) {
    return `Hello b!`
}

var greetingB = helloB ()

// console.info(greetingA)


//3
//Defina una función greet que devuelva el valor 'Haydo!'.
//Declarar una variable salutation. 
//Llame a la función greet y asigne el resultado de la llamada a la variable salutation.
//Imprimirla en consola con un string que nos calare que ejercicio es.

function greet () {
    return `Haydo!`;
}

var salutation = greet()

// var resultado = greet (salutation)

// console.info(resultado)


//Ejercicio
//Escribir una función echo que también devuelva el parámetro pasado. 
//echo('Greta') debe volver 'Greta'y echo('CO2') debe volver'CO2'


function echo (input) {
    return input
}

let result1 = echo ("Greta") 
let result2 = echo ("CO2")

// console.info (result1)



//EJEMPLO MUY IMPORTANTE //EJEMPLO MUY IMPORTANTE //EJEMPLO MUY IMPORTANTE //EJEMPLO MUY IMPORTANTE //EJEMPLO MUY IMPORTANTE

//Variables 
let numeroA = 3 
let numeroB = 6
let numeroZ = 7

//Declarar funciones
function sumar(Numero1, Numero2, diego){
  return Numero1 + Numero2 + diego
}

function restar(a , b){
  return a - b
}

function multiplicar(a , b){
  return a * b
}


//llamar a las funciones
// console.info(sumar(3567, numeroA, numeroZ)) //10
// console.info(sumar(6, 15, numeroB)) //21 //hardcode - no lo hagan




let edadDeRaul = 17;
let edadDeLucia = 20;
let edadDeCarlos = 89;
const nombre = "Raul";

function validarEdad(edad) {
  var resultado;
  switch (true) {
    case (edad >= 18 && edad < 70):
      resultado = " puede conducir";
      break;
    case (edad >= 70 && edad >80):
      resultado = " deja la herencia y no conduzcas";
      break;
    case (edad >= 80):
      resultado = " deja la herencia y no conduzcas";
      break;
    default:
      resultado = " no puede conducir";
  }

  return resultado;
}

console.info(validarEdad(edadDeRaul));




    for (var x = 0; x <=100; x++) {
        console.info (x)
    }
