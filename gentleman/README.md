# TS

## ¿Qué es TypeScript? - JavaScript con esteroides

En Typescript existen tipos de datos que no existen en JavaScript, como por ejemplo:

- `Interfaces`
- `private` y `protected` en las clases
- `Enums`

Ts nos puede ayudar a escribir menos código en algunos casos, ya que nos permite definir tipos de datos y estructuras que facilitan la escritura y el mantenimiento del código.

```typescript
setName(name: string): void {
    this.name = name;
  }
```

```js
setName(name) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }
    this.name = name;
}
```

## Shape

En TypeScript, una `interface` define la forma (shape) de un objeto. Es una manera de describir qué propiedades y métodos debe tener un objeto sin proporcionar una implementación concreta. Las interfaces son útiles para garantizar que los objetos cumplan con ciertas expectativas en cuanto a su estructura.
Por ejemplo, si tenemos una clase `Persona`, podemos definir una interfaz `PersonaInterface` que describa las propiedades y métodos que una instancia de `Persona` debe tener:

```typescript
class Persona {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
}
```

```typescript
interface PersonaInterface {
  name: string;
  getName(): string;
  setName(name: string): void;
}
```

```typescript
let personaPosible: PersonaInterface = persona; // This works because Persona implements PersonaInterface and has the same shape
```

Si no se cumple con la forma definida en la interfaz (contrato), TypeScript generará un error en tiempo de compilación, ayudando a prevenir errores en tiempo de ejecución.

La transpilación es el proceso de convertir código escrito en un lenguaje de alto nivel (como TypeScript) a otro lenguaje de alto nivel (como JavaScript). TS es un superset de JS, lo que significa que cualquier código JavaScript válido es también código TypeScript válido. Sin embargo, TypeScript añade características adicionales, como tipos estáticos y interfaces, que no están presentes en JavaScript.

## Type

En TypeScript, un `type` es una forma de definir un alias para un conjunto de tipos de datos personalizados.

## Type vs Interface

La principal diferencia entre `type` e `interface` en TypeScript radica en su propósito y capacidades:

🔹 Cuándo usar interface

- Definir la forma de objetos.

- Definir contratos públicos de librerías o APIs.

- Cuando quieres que sea extensible (herencia, implementación en clases).

- Cuando quieres aprovechar el declaration merging (varias declaraciones con el mismo nombre que se combinan).

```typescript
// Forma de objeto
interface User {
  id: number;
  name: string;
}

// Extensión
interface Admin extends User {
  role: "admin";
}

// Merging: se fusiona automáticamente
interface User {
  email: string;
}
```

🔹 Cuándo usar type

- Definir uniones o intersecciones.

- Crear alias de tipos complejos (funciones, tuplas, genéricos complicados).

- Cuando quieres componer tipos de forma flexible.

```typescript
// Forma de objeto
interface User {
  id: number;
  name: string;
}

// Extensión
interface Admin extends User {
  role: "admin";
}

// Merging: se fusiona automáticamente
interface User {
  email: string;
}
```

En resumen:

- Si lo que quieres es un “molde” de objeto o contrato → usa interface.

- Si lo que quieres es un “alias” de un tipo complejo → usa type.

## Unión e Intersección (Union & Intersection)

