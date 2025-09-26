/*
🔹 0. Interface vs Type Alias
*/
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  role: string;
}

type PersonType = {
  name: string;
  age: number;
};

type EmployeeType = {
  role: string;
};

type ExtendedEmployeeType = PersonType & EmployeeType;

/*
🔹 1. Tipado básico de variables

Reto:
Declara las siguientes variables con el tipo correcto:

username (string)

age (number)

isActive (boolean)

points (puede ser number o string)
*/

let username: string = "Elliot";

let age: number = 28;

let isActive: boolean = true;

let points: number | string = 100;

/*
🔹 2. Funciones con parámetros tipados

Reto:
Crea una función greet que reciba un name: string y un age: number.
Debe imprimir: "Hola NAME, tienes AGE años."
*/

function greet(name: string, age: number): string {
  return `Hola ${name}, tienes ${age} años.`;
}

console.log(greet(username, age));

/*
🔹 3. Objetos con inferencia

Reto:
Crea un objeto hero con las propiedades:

name (string)

age (number)

power (string)

TS debe inferir el tipo automáticamente.
Intenta reasignar hero.power a un número y observa el error.
*/

let hero = {
  name: "Spiderman",
  age: "28",
  power: "local",
};

hero.power = 90;

/*
🔹 4. Type Alias

Reto:
Crea un type llamado Hero con name: string y age: number.
Define una función createHero que reciba esos parámetros y devuelva un Hero.
*/

type Hero = {
  name: string;
  age: number;
};

function createHero(hero: Hero): Hero {
  const { name, age } = hero;
  return { name, age };
}

// Pruebas Erroneas y Correctas
console.log(createHero({ name: "Batman", age: "thirty" }));
console.log(createHero({ name: 123, age: 35 }));
console.log(createHero({ age: 35 }));
console.log(createHero({ name: "Batman" }));
console.log(createHero({ name: "Batman", age: 35, power: "wealth" }));
console.log(createHero({ name: "Batman" }));
console.log(createHero({ name: "Batman", age: 35 }));

/*
🔹 5. Interface vs Type

Reto:

Declara una interface Person con name y age.

Extiende Person en una interface Employee con role.

Haz lo mismo con type.

Intenta usar declaration merging en ambos y observa qué pasa.
*/

interface PersonInterface {
  name: string;
  age: number;
}

interface EmployeeInterface extends PersonInterface {
  role: string;
}

type PersonType5 = {
  name: string;
  age: number;
};

type EmployeeType5 = PersonType5 & {
  role: string;
};
// Intento de declaration merging
interface PersonInterface {
  email: string;
}
type PersonType5 = {
  name: string;
  age: number;
  email: string;
};
// Error: Duplicate identifier 'PersonType5'.

/*
🔹 6. Union Types

Reto:
Define un tipo Status que pueda ser "active" | "inactive" | "banned".
Crea una función setStatus que reciba un Status y lo imprima.
*/

type Status = "active" | "inactive" | "banned";

function setStatus(status: Status) {
  console.log(status);
}

setStatus("active");
setStatus("activo");
setStatus("banned");
setStatus("baneado");
setStatus("inactive");
setStatus("inactivee");

/*
🔹 7. Tuplas

Reto:
Crea una tupla RGB con tres valores numéricos.
Ejemplo: [255, 255, 0].
*/

type RGB = [number, number, number];

// Ejemplo de uso
let color: RGB = [255, 255, 0];
let wrongColor: RGB = [255, 255, "0"];
let anotherWrongColor: RGB = [255, 255];
let yetAnotherWrongColor: RGB = [255, 255, 0, 100];

/*
🔹 8. typeof y ReturnType

Reto:

Declara una constante config con host: "localhost" y port: 3306.

Usa typeof para crear un tipo Config.

Crea una función getConfig que retorne un objeto igual a config y usa ReturnType para tipar otra variable.
*/

const config = {
  host: "localhost",
  port: 3306,
};

type Config = typeof config;

function getConfig() {
  return config;
}

type ConfigFromFn = ReturnType<typeof getConfig>;

const cf: ConfigFromFn = { host: "127.0.0.1", port: 5432 };
