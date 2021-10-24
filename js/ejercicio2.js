// class Password {
//     constructor(longitud) {
//         this.contraseña = contraseña
//         this.longitud = longitud
//         if (longitud === 8) {
//             this.contraseña = Math.floor(Math.random() * (99999999 - 11111111) + 1)
//         }
//     }

//     // generador() {
//     //     this.contraseña = Math.floor(Math.random() * (99999999 - 11111111) + 1)
//     // }
// }

// class Password {
//     constructor(longitud = 8, contraseña) {
//         this.longitud = longitud
//         this.contraseña = ''

//     }
//     generador() {
//         if (this.longitud === 8) {
//             for (let i = this.longitud; i >= 1; i--) {
//                 this.contraseña += Math.round(Math.random() * 9)
//             }
//         } else {
//             console.log('no es un numero valido intentelo de nuevo');
//         }
//         return
//     }

// }
class Password {
    constructor(longitud = 8, contraseña) {
        this.longitud = longitud
        this.contraseña = ''
    }
    generador() {
        for (let i = this.longitud; i >= 1; i--) {
            this.contraseña += Math.round(Math.random() * 9)
        }
        return
    }
}

const contraseña1 = new Password(8);
contraseña1.generador()
console.log(contraseña1.contraseña);