//  Inferencia

// Como a y b infiere que son de tipo number sin necesidad de declararlo
let a = 10;
let b = 20;
let c = a + b;
console.log(c);

// c también es inferido como number

// Al inferir el tipo de dato, podemos acceder a las propiedades y métodos de ese tipo, además de recibir ayuda del autocompletado y validaciones en tiempo de desarrollo

let cadenaDeTexto = "Hola Mundo";
cadenaDeTexto.toLowerCase();
cadenaDeTexto = 20; // Error: No se puede asignar un número a una variable de tipo string

cadenaDeTexto.float(); // Error: La propiedad 'float' no existe en el tipo 'string'

// Funciones
function saludar(name: string) {
  console.log(`Hola ${name}`);
}

saludar("Elliot");
saludar(28); // Error: No se puede pasar un número a una función que espera un string

// Funciones con objeto como parámetro
// primera forma
function saludar2({ name, age }: { name: string; age: number }) {
  console.log(`Nombre: ${name}, Edad: ${age}`);
}
saludar2({ name: "Elliot", age: 28 });
// segunda forma con valor de retorno tipado
function saludar3(persona: { name: string; age: number }): string {
  const { name, age } = persona;
  return `Nombre: ${name}, Edad: ${age}`;
}
saludar3({ name: "Elliot", age: 28 });

// función que recibe una callback

// Se especifica que la función fn recibe un string y no retorna nada (void)
const sayHiFromFunction = (fn: (message: string) => void) => {
  fn("Hola desde la función");
};

const sayHi = (message: string) => {
  console.log(message);
};

sayHiFromFunction(sayHi);

// Tipar arrow functions
const sumar = (a: number, b: number): number => {
  return a + b;
};

const sumar2: (a: number, b: number) => number = (a, b) => {
  return a + b;
};

// Inferencia funciones anonimas segun el contexto
const avengers = ["Spiderman", "Ironman", "Hulk"];
avengers.map((avenger) => avenger.toUpperCase());

// ***************** Objetos y tipos *****************
/*
const heroe: Heroe = {
  name: "Logan",
  age: 60,
};

heroe.age = 61;
heroe.name = "Wolverine";
heroe.power = "Regeneración";

function createHeroe(heroe: Heroe): Heroe {
  const { name, age } = heroe;
  return { name, age };
}

const thor = createHeroe({ name: "Thor", age: 1500 });

// Type Alias
type Heroe = {
  name: string;
  age: number;
};
*/
// *********************** Optional properties
/*
type HeroeId = `${string}-${string}-${string}-${string}-${string}`;

type Heroe = {
  readonly id?: HeroeId; // readonly hace que la propiedad sea de solo lectura
  name: string;
  age: number;
  isActive?: boolean;
};

const heroe: Heroe = {
  name: "Logan",
  age: 60,
};

function createHeroe(heroe: Heroe): Heroe {
  const { name, age } = heroe;
  // return { id: "123", name, age, isActive: true };
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHeroe({ name: "Thor", age: 1500 });

thor.id = 123324532453425342;

// Template union types
type HexadecimalColor = `#${string}`;

const color1: HexadecimalColor = "#ff0000";
const color2: HexadecimalColor = "ffgg00"; // Error: No es un color hexadecimal válido
*/
// ********************* Union types
/**
   * HeroeId es un tipo que representa la identificación única de un héroe.
  // El tipo HeroPowerScale representa la escala de poder de un héroe, que puede ser uno de los siguientes valores: "local", "planetary", "galactic", "universal" o "multiversal".
  type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";
  
type Heroe = {
  readonly id?: HeroeId;
  name: string;
  age: number;
  isActive?: boolean;
  powerScale?: HeroPowerScale; // Union type
};

const heroe: Heroe = {
  name: "Logan",
  age: 60,
};

function createHeroe(heroe: Heroe): Heroe {
  const { name, age } = heroe;
  // return { id: "123", name, age, isActive: true };
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHeroe({ name: "Thor", age: 1500 });
thor.powerScale = "multiversal";

*/
// ********************* Intersección de tipos (Intersection types)
/*
type HeroeId = `${string}-${string}-${string}-${string}-${string}`;
type HeroPowerScale =
  | "local"
  | "planetary"
  | "galactic"
  | "universal"
  | "multiversal";

type HeroeBasicInfo = {
  name: string;
  age: number;
};

type HeroeProperties = {
  readonly id?: HeroeId;
  isActive?: boolean;
  powerScale?: HeroPowerScale; // Union type
};

type Heroe = HeroeBasicInfo & HeroeProperties;

const heroe: Heroe = {
  name: "Logan",
  age: 60,
};

function createHeroe(input: HeroeBasicInfo): Heroe {
  const { name, age } = input;
  return { id: crypto.randomUUID(), name, age, isActive: true };
}

const thor = createHeroe({ name: "Thor", age: 1500 });
*/
//  ********************* Type Indexing
type HeroeProperties = {
  isActive: boolean;
  address: {
    planet: string;
    city: string;
  };
};

const adressHeroe: HeroeProperties["address"] = {
  planet: "Earth",
  city: "New York",
};

// Type from values
const adress = {
  planet: "Earth",
  city: "New York",
};
type Address = typeof adress;
const adressHeroe2: Address = {
  planet: "Earth",
  city: "New York",
};

// Type from frunction return
function createAdress() {
  return {
    planet: "Earth",
    city: "New York",
  };
}
type Address2 = ReturnType<typeof createAdress>;

// ********************* Arrays
// const lenguajes = []; // Tipo any[] por inferencia
const lenguajes: string[] = []; // Tipo any[] por inferencia

lenguajes.push("TypeScript");
lenguajes.push("JavaScript");
lenguajes.push(123); // Error: No se puede agregar un número a un array de strings

// Si quisiéramos permitir múltiples tipos, podríamos usar un Union Type
const lenguajes2: (string | number)[] = [];
lenguajes2.push("TypeScript");
lenguajes2.push(123);
lenguajes2.push(true); // Error: No se puede agregar un booleano a un array de strings o números

// Array con tipos personalizados
type HeroeId = `${string}-${string}-${string}-${string}-${string}`;

type HeroeBasicInfo = {
  name: string;
  age: number;
};

const heroesArray: HeroeBasicInfo[] = [];

type CellValue = "X" | "O" | "";

type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];
const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "X"],
];
