# <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> CLASE 1

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> ¿Qué es TypeScript ?

- Es JavaScript con una sintaxis para tipos.

- Es un superset de JavaScript, le agrega **tipos estáticos** y objetos basados en clases.

- No funciona en tiempo de ejecución, se compila y llega al navegador como JavaScript.

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/01a67373-7b04-447d-9836-b789d43f9ee3" width="280" alt="typescript y javascript">

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> ¿Por qué aprenderlo?

- Se está utilizando cada vez más. Hay más opciones de trabajo.
- Mejora la calidad del código y reduce errores.
- Facilita el mantenimiento y la escalabilidad de las aplicaciones.
- Mejora la experiencia del desarrollador.
- Es sencillo de aprender.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Ventajas

- Fue creado en 2012 por **Microsoft**, en sus aplicaciones muy grandes necesitaban el grado de seguridad de los tipos.

- JavaScript es de tipo débil y dinámico, por ejemplo si tenemos una variable **a** se puede inicializar como un **string** y luego asignarle un valor **number**:

```JavaScript
let a = 'hola'
a = 10
```

En cambio con TypeScript:

```TypeScript
let a:string = 'chau'
// a = 2 esto no se puede hacer, ya se infiere es de tipo string no number
```

Ejemplo de una función con TypeScript:

```TypeScript
function suma(a:number, b:number):number {
  return a+b
}
suma(2,3)
```

- El codigo se va 'autodocumentando', ya no es necesario escribir tanto explicando las funciones.

- Añade: seguridad y robustez.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Concepto inferir

```TypeScript
let saludo = 'hola mundo'
// infiere que es de tipo string por el valor asignado, no es necesario asignarlo manualmente, además, no puede cambiar de tipo
let saludo = 123 // error
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> TypeScript compilación

**TS** funciona en tiempo de **compilación** y **JS** funciona en tiempo de **navegación**, eso significa que **TS** no se ejecuta en el navegador, sino que se compila a **JS** y es ese código **JS** el que se ejecuta en el navegador.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Herramientas

- **VSC** esta creado con TS, ya lo tine nativo, por lo que si se escribe el código en VSC, ya nos va a ir marcando los errores. También tenemos el autocomplete.

- **TS** es capaz de observar como es y te dice su forma.

- Hay una extensión en VSC: **Pretty TypeScript Errors** de yoavbls

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipos en TypeScript

- string

- number

- null

- undefined

- boolean

- any

  - Este tipo es un escape hatch, es como si no tuviera tipado, puede ser cualquier cosa, es como JavaScript. Hay que evitarlo.

- unknown
  - no sabemos cual es el tipo de dato, pero no es any, es un tipo seguro, no podemos hacer nada con el dato hasta que no sepamos que tipo es.

Para los tipos básicos no es necesario tipar cuando declaro las variables.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Funciones

Los parametros de las funciones no tienen inferencia, si no tienen contexto

```TypeScript
function saludar(name: string) {
  console.log(`Hola ${ name }`)
}

saludar('Pepe')
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipar funciones parametros

Si en los **parametros** tenemos un **objeto**, tneemos distintas formas de tiparlo...

...1er opción:

```TypeScript
function saludoCompleto({ name, age }: { name: string, age: number }) {
  console.log(`Hola ${ name }, tienen ${ age } años`)
}
```

...2da forma de tiparlo:

```TypeScript
function saludoCompleto2(persona: { name:string, age:number }) {
  const {name, age} = persona // si o si necesito desestructurar
  console.log(`Hola ${ name }, tienen ${ age } años`)
}
```

- También se puede tipar el **Return** de la función:

```TypeScript
function saludoCompleto3(persona: { name:string, age:number }): number { // devuelve number
  const {name, age} = persona
  console.log(`Hola ${ name }, tienen ${ age } años`)
  return age  // devuelve number
}
```

- Por definición las funciones **no tienen inferencia**, pero hay casos en los que si, en las **funciones anonimas**, según el contexto:

```TypeScript
const avengers = ['Spidey', 'Hulk', 'Avengers']
avengers.forEach(avenger => {
  console.log(avenger.toUpperCase())
})
```

Dentro del console.log cuando tengo avengers. veo los metodos del string, TS con el **.forEach()** sabe que es un array de string e infiere que avenger es un string. Pasa con todas las funciones de array, por ejemplo con **.map()**

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Tipar "arrow functions"

Este ejemplo está sin tipar, es solo para indicar la parte del callback.

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/efe91de5-ad93-45bf-bbd8-9f1667c6b400" width="350" alt="arrow function" />

OJO, no usar **Function** para tipar, es el **any** de las funciones, hay que evitarlo, hay que decir que funcion necesitamos

```TypeScript
const sayHiFromFunction = (fn: (name:string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```

Se establece un **void** porque la callback no tiene un **return** explícito, si no usamos **void** entonces tendremos un valor **undefined**. Si tengo void e igualmente devuelve algo, no hay problemas en la compilación.

- Un modo de tipar las arrow functions

```TypeScript
const sumar = (num1: number, num2: number): number => a + b
```

- Otro modo de tipar las arrow functions. Primero indico los tipos y luego la arrow function.

```TypeScript
const restar: (num1: number, num2: number) => number = (a, b) => { return a - b }
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> never / void

NEVER

Para funciones que sabemos que nunca van a devolver nada. Tienen un throw y ahi finaliza la función, nunca llega al return implícito, nunca termina de ejecutarse la función.

```TypeScript
function throwError(message: string): never {
  if(message) throw new Error(message)
  throw new Error(message)
}
```

VOID

Una función que no devuelve nada, no tiene return explícito, pero si tiene un return implícito (undefined)

```TypeScript
const sayHiFromFunction = (fn: (name:string) => void) => {
  return fn('Euge')
}

sayHiFromFunction((name: string) => {
  console.log(`Hola ${name}`)
})
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Objetos

Los objetos tienen inferencia de datos:

```TypeScript
let hero = {
  name: 'Thor',
  age: 1500
}

// hero.name= 1234434
// hero.power = 100
```

-> ya infiere que **name** es de tipo **string** y **Age** es de tipo **number**. No puedo asignar un number a name que es string.

Lo que NO puedo hacer con TS es agregarle un nuevo par key:value al objeto, si queiria agregar power me lo marca como error y avisa que no existe.

```TypeScript
hero.power = 100 // error, no existe la key power en hero
```

**TS** nos hace un **contrato** de nuestros objetos. Es una de las ventajas, ya que con javaScript podría agregarle cualquier key:value y no me daría error.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type Alias

Un **type** es un alias, una forma de reutilizar tipos.

```TypeScript
type Hero = {
  name: string
  age: number
}

let hero: Hero = {
  name: 'Thor',
  age: 1500
}

// hero.name= 1234434
// esto no es posible porque ya infiere que name es string

// En esta función no utilizamos el type Hero, los parametros son independientes
function createHero(name: string, age:number): Hero {
  return { name, age  }
}

const thor = createHero('Thor', 1500)
```

- Si quiero usar el type Hero en la función, lo puedo hacer:

```TypeScript
// Al usar el type Hero en la función, los parametros son un objeto que cumple con la forma del type Hero
// pero no son independientes, necesitamos desestructurar el objeto
function createHero2(hero: Hero): Hero {
  const {name, age} = hero
  return { name, age  }
}

const thor2 = createHero({name:'Thor', age: 1500})
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Optional properties

<img src="https://github.com/eugenia1984/aprende-TypeScript-curso-intensivo/assets/72580574/5edb50a4-7ccf-4916-9c0d-16d88549a1a6" width="480" alt="optional properties" />

Si quiero que una propiedad de un type sea opcional, es decir que pueda o no estar, podemos lograrlo con el uso del **?** en la definición del type:

```TypeScript
const thor: Hero = {
  name: 'Thor',
  age: 1500,
  isActive?: true // opcional
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Optional chaining operator

```TypeScript
let name =  data?.name
```

Si existe **data** entonces busco el valor de la key **name**

Le puedo agregar un valor por defecto:

```TypeScript
thor.id ?? 'No tiene valor'
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Inmutabilidad

Si quiero que un objeto no pueda ser modificado después de su creación, puedo usar el modificador **readonly** en las propiedades del objeto:

```TypeScript
type Hero = {
  readonly id: number
  name: string
  age: number
}

const thor: Hero = {
  id: 1,
  name: 'Thor',
  age: 1500
}

// thor.id = 2 // error, no se puede modificar
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Object freeze

En TypeScript (y en JavaScript), Object.freeze() sirve para volver inmutable un objeto en tiempo de ejecución.

Es decir: una vez que lo “congelas”, no puedes agregar, quitar o modificar propiedades de ese objeto.

```TypeScript
const hero = {
  name: "Thor",
  age: 1500
}

Object.freeze(hero)

hero.age = 2000   // ❌ No cambia
console.log(hero.age) // 1500
```

Aquí Object.freeze evita que age se modifique en tiempo de ejecución.

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Diferencia con readonly en TypeScript

- readonly → chequeo en tiempo de compilación (TypeScript).

- Object.freeze() → protección en tiempo de ejecución (JavaScript).

```TypeScript
type Hero = {
  readonly name: string
  age: number
}

const ironman: Hero = { name: "Tony", age: 45 }

ironman.age = 50       // ✅ permitido (no es readonly)
ironman.name = "Stark" // ❌ Error en TS (tiempo de compilación)
```

Cuando usas Object.freeze, TypeScript puede inferir que el objeto es readonly:

```TypeScript
const hero = Object.freeze({
  name: "Thor",
  age: 1500
})

// hero.age = 2000   // ❌ Error en TS: read-only
```

Esto funciona porque TS entiende que un objeto “congelado” se trata como Readonly<T>.

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Template Union Types

Son tipos que usan template literal types (cadenas dinámicas) combinados con union types, para construir cadenas tipadas de manera automática.

```TypeScript
type HeroId = `${string}-${string}-${string}-${string}-${string}`

type Hero = {
  readonly id?: HeroId // es de tipo: HeroId
  name: string
  age: number
  isActive?: boolean
}

function createHero(hero: Hero): Hero {
  const { name, age } = hero
  return {
    id: crypto.randomUUID(), // es de tipo: HeroId
    name, age,
    isActive: true
  }
}
```

Un **type** puede ser una **RegEx**

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Union Types

Un union type permite que una variable, parámetro o retorno sea de varios tipos posibles, no solo uno.

Ejemplo 1: puede ser de tipo number o string:

```TypeScript
let annnn: number | string
```

Ejemplo 2: puede ser un string o el numero 2:

```TypeScript
let annnn: string | 2
// annnn = 3 va a dar error
```

Ejemplo 3:

```TypeScript
type HeroPowerScale = 'local' | 'planetary' | 'galactic' | 'universal' | 'multiversal' | 'omnipresent'

type Hero = {
  readonly id?: HeroId
  name: string
  age: number
  isActive?: boolean
  powerScale?: HeroPowerScale
}
```

Para usar con animaciones, pueden ser booleanas o un número, si es un número por defecto son 200ms

```TypeScript
const enableAnimationDuration:  boolean | number = 200
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Intersection Types

Un intersection type combina múltiples tipos en uno solo.

Se escribe con & y significa: "debe cumplir con todos estos tipos al mismo tiempo".

```TypeScript
type HeroBasicInfo = {
  name: string,
  age: number,
}

type HeroProperties = {
  readonly id?: HeroId,
  isActive?: boolean,
  powerScale?: HeroPowerScale
}

// Generamos el tipo Hero como la intersección de HeroBasicInfo y HeroProperties
type Hero = HeroBasicInfo & HeroProperties

// Usamos HeroBasicInfo para tipar el parámetro de la función
// Usamos Hero como tipo de retorno
function createHero(hero: HeroBasicInfo): Hero {
  const { name, age } = hero

  return {
    id: crypto.randomUUID(),
    name, age,
    isActive: true
  }
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type indexing

El type indexing (indexación de tipos) es la forma de acceder al tipo de una propiedad dentro de un objeto/alias.

Es como cuando en JavaScript accedemos a una propiedad con obj["prop"], pero en este caso lo hacemos en el sistema de tipos.

```TypeScript
type HeroProperties2 = {
  isActive?: boolean,
  address: {
    planet: string,
    city: string
  }
}

const addressHero: HeroProperties2['address'] = {
  planet: 'Earth',
  city: 'Madrid'
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type from value y typeof

En JavaScript, typeof se usa en runtime para saber el tipo de un valor:

```JavaScript
typeof 123 // 'number'
typeof 'hola' // 'string'
```

En TypeScript, typeof se usa en tiempo de compilación para extraer el tipo de un valor (constante, objeto, función, etc.) y reutilizarlo como un alias de tipo.

```TypeScript
const address: {
  planet: 'Earth',
  city: 'Madrid'
}

// Aqui Address es { planet: string, city: string }, deducido del objeto
type Address = typeof address

const addressTwitch: Address = {
  planet: 'Mars',
  city: 'Twitch'
}
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Type from function return

Podemos extraer el tipo de retorno de una función:

**ReturnType** -> toma lo que devuelve la función y lo convierte en un tipo.

```TypeScript
function createAddress() {
  return {
    planet: 'Tierra',
    city: 'Barcelona'
  }
}

type Address2 = ReturnType<typeof createAddress>
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Arrays

Un array en TS funciona como en JS, pero le podemos decir explícitamente qué tipos de datos acepta.

Eso nos da seguridad: no podemos meter datos que no correspondan.

- Sintaxis 1 (la más usada):

```TypeScript
const languajes:string[] = []
languajes.push('JavaScript')
// Lo cual no me va a permitir agregar un number, un booleano u otro dato que no sea string:
// languages.push(123) ❌ Error
```

- Sintaxis 2 (genérica):

```TypeScript
const lenguages: Array<string>
```

### Arrays con Union Types

Se permite más de un tipo, pero solo los que definas.

```TypeScript
const languajes: (string | number)[] = []
```

### Arrays de tipos personalizados (Type Alias)

```TypeScript
type Hero = { name: string; age: number }

const heroes: Hero[] = []
heroes.push({ name: "Thor", age: 1500 }) // ✅
```

---

## <img width="48" height="48" src="https://img.icons8.com/color/48/typescript.png" alt="typescript"/> Matrices y tuplas

Para armar el Tres en raya (Ta-Te-Ti):

```TypeScript
type CellValue = 'X' | 'O' | ''
```

Una `tupla` es un array especial con longitud fija y tipos específicos en cada posición:

```TypeScript
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
]
```

GameBoard es una tupla, es un array,q eu adentro teine 3 elementos, cada uno de ellos es otro array con 3 elementos

```TypeScript
const gameBoard: GameBoard = [
  ['X', 'O', 'X'],
  ['O', 'X', 'O'],
  ['X', '', 'X']
]
```

-> Otro ejemplo de tuplas: colores RGB:

```TypeScript
type RGB = [number, number, number]

const color: RGB = [255, 100, 50] // ✅
```

### Inferencia automática

Si inicializas un array con valores, TS infiera el tipo automáticamente:

```TypeScript
const numbers = [1, 2, 3]
// numbers: number[]

const mix = [1, "hola"]
// mix: (string | number)[]

```

### Arrays readonly

Si quieres que no se pueda modificar:

```TypeScript
const numbers: readonly number[] = [1, 2, 3]

// numbers.push(4) ❌ Error
```

---
