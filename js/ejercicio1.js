class Persona {
    constructor(nombreParam, edadParam, DNI, peso, altura) {
        this.nombre = nombreParam,
            this.edad = edadParam,
            this.DNI = DNI,
            this.peso = peso,
            this.altuna = altura,
            this.sexo = 'h'
    }
}

const persona1 = new Persona('Manuel', 30, 498489409, 90, 180, 'M');
const persona2 = new Persona('Brajin', 27, 6118454, 85, 190, 'M');
const persona3 = new Persona('Guille', 20, 12341239, 90, 170, 'M');
const persona4 = new Persona('Gonzalo', 20, 12341239, 90, 170);

console.log(persona1);
console.log(persona2);
console.log(persona3);
console.log(persona4);