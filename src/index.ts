console.log('Hola mundo');

let edad: number = 10;

if (edad > 5)  {
    edad = edad + 5;


}

// Parte 2

let ventas: number = 123_456_789;
let mi_nombre: string = "Roberto";
let funcion_activa: boolean = true;

// Tipos solo de typescript

let cualquier_cosa: any = 1; // Pero porque utilizas any si luego pones un numero ??:(


// Array (tipos...)[]


let mi_lista: (number|string)[] = [2, "patata"]; // Por eso utilizamos typescript porque especificamos en cada caso que es
mi_lista[1] = 2;

// tupla [tipo, tipo]

let mi_tupla: [string, number] = ["hola", 3];
mi_tupla[1] = 4

//enum cositas de type script :)

const enum del_1_4 {
    Numero_Uno = 1,
    Numero_Dos = 2,
    Numero_Tres,
    Numero_Cuatro
}

// Funcion typescript function funcion(): tipo_retorno
function MultiplicameNumero(numero: number): (number|void) {

    if (numero == 5) {
        return numero*0.5;
    }else {
        return numero*0.2;
    }
}

// Objetos javascript {propiedad:, propiedad:}
let mesa = {
    patas: 4,
    tipo_madera: "pino"
    
}

// Objeto con typescript {propiedad: tipo, propiedad: tipo}
let mesa_t: {patas: number, tipo_madera: string, readonly color: any} = {
    patas: 4,
    tipo_madera: "pino",
    color: "rojo"
    
}

// type alias

type Mesa = {
    patas: number,
    tipo_madera: string,
    readonly color: any
}
// Y puedo utilizar la plantilla alias de tipo de dato mucho mas facil:

let silla: Mesa = {
    patas: 2,
    tipo_madera: "oak",
    color: "rojo"
}

let o1 =  mesa_t;

console.log(mi_lista)
console.log(mi_tupla)
console.log(del_1_4.Numero_Cuatro)
console.log(MultiplicameNumero(5))