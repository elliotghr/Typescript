class Persona {
  // private name: string;
  name: string;

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

interface PersonaInterface {
  name: string;
  getName(): string;
  setName(name: string): void;
}

const persona: Persona = new Persona("Elliot");
let personaPosible: PersonaInterface = persona; // This works because Persona implements PersonaInterface
