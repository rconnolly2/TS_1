"use strict";
console.log('Hola mundo');
let edad = 10;
if (edad > 5) {
    edad = edad + 5;
}
// Parte 2
let ventas = 123456789;
let mi_nombre = "Roberto";
let funcion_activa = true;
// Tipos solo de typescript
let cualquier_cosa = 1; // Pero porque utilizas any si luego pones un numero ??:(
// Array
let mi_lista = [2, "patata"]; // Por eso utilizamos typescript porque especificamos en cada caso que es
mi_lista[1] = 2;
// tupla
let mi_tupla = ["hola", 3];
mi_tupla[1] = 4;
// Funcion typescript
function MultiplicameNumero(numero) {
    if (numero == 5) {
        return numero * 0.5;
    }
    else {
        return numero * 0.2;
    }
}
console.log(mi_lista);
console.log(mi_tupla);
console.log(4 /* del_1_4.Numero_Cuatro */);
console.log(MultiplicameNumero(5));
//# sourceMappingURL=index.js.map