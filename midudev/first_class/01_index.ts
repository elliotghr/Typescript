// Tipado Inferido
let name = "Elliot";

name = 2;

console.log(name);

const persona = {
  nombre: "Elliot",
  edad: 28,
};

persona.sd;
persona.nombre;

// Tipado Explícito
let edad: number = 28;
edad = "28";

console.log(edad);

let texto: string = "Hola Mundo";

// Tipado any
let anyValue: any = "Hola Mundo";
// Perdemos las ventajas de TypeScript
anyValue = 28;
anyValue = true;
