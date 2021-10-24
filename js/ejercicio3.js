class Electrodomestico {
    constructor(precioBase, color, consumoLetra, peso, letra) {
        this.precioBase = 100;
        this.color = 'blanco';
        this.consumoEnergetico = "F";
        this.peso = 5;
        this.precioLetra = 0;
    }
    get consumoLetra() {
        return this.precioLetra
    }
    comparador(consumoLetra) {
        if (comprobarConsumoEnergetico == 'A') {
            return this.precioLetra = 100
        } else {
            return this.precioLetra = 0
        }
    }
}
const tv = new Electrodomestico(undefined, undefined, 'A', undefined, undefined);
tv.comparador

console.log(tv.precioLetra);
console.log(tv);
// class Electrodomestico {
//     constructor(precioBase, color, consumoEnergetico, peso, letra) {
//         this.precioBase = precioBase;
//         this.color = 'blanco';
//         this.consumoEnergetico = "F";
//         this.peso = 5;
//     }
//     comprobarConsumoEnegetico(consumoEnergetico) {}
//     get precioInicial() {
//         return this.precioBase
//     }
//     get tipoColor() {
//         return this.color
//     }
//     get precioCE() {
//         return this.consumoEnergetico = (consumo) => {
//             switch (consumo) {
//                 case "A":
//                     if ('A') {
//                         return 100
//                     }
//                     break;
//                 case "B":
//                     if ('B') {
//                         return 50
//                     }
//                     break;
//                 case "C":
//                     if ('C') {
//                         return 50
//                     }
//                     break;
//                 case "D":
//                     if ('D') {
//                         return 50
//                     }
//                     break;
//                 case "E":
//                     if ('E') {
//                         return 50
//                     }
//                     break;
//                 case "F":
//                     if ('F') {
//                         return 50
//                     }
//                     break;
//                 default:
//                     break;
//             }
//         }
//     }
//     get pesoKilo() {
//         return this.peso = (kilos) => {
//             if (kilos <= 19) {
//                 return 10
//             } else if (kilos <= 49) {
//                 return 50
//             } else if (kilos <= 80) {
//                 return 80
//             } else {
//                 return 100
//             }
//         }
//     }
// }
// class Electrodomestico {
//     //     constructor(precioBase, color, precioCE, peso) {
//     //         this.precioBase = precioBase;
//     //         this.color = 'blanco';
//     //         this.consumoEnergetico = precioCE;
//     //         this.peso = 5;
//     //     }
//     //     get precioCE() {
//     //        return this.consumoEnergetico
//     //     }

//     // }


//     // const tv = new Electrodomestico(100, undefined, 'A', undefined);
//     // console.log(tv.consumoEnergetico);
//     // console.log(tv);


// const tv = new Electrodomestico(100);
// console.log(tv);