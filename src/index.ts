// let mensaje: string = "Hola Mundo";

// mensaje = "chanchito feliz";

// mensaje = "chao mundo";
// console.log(mensaje);

// let extincionDinosaurios = 76_000_000;
// let dinosarioFavorito = "T-rex";
// let extintos = true;

// function chanchitoFeliz(config: any) {
//   return config;
// }

// let animales: string[] = ["chanchito", "feliz", "felipe"];
// let nums: number[] = [1, 2, 3];
// let checks: boolean[] = [];
// let nums2: Array<number> = [];

// // nums.map(x => x.) el autocompletado segiere métodos del tipo de dato

// let tupla: [number, string[]] = [1, ["chanchito feliz", "chanchito felipe"]];

// const chica = "s";
// const mediana = "m";
// const grande = "l";
// const extragrande = "xl";

// //PascalCase
// enum Talla {
//   Chica = "s",
//   Mediana = "m",
//   Grande = "l",
//   ExtraGrande = "xl",
// }

// const variable1 = Talla.Grande;
// console.log(variable1);

// // Mis tipo de datos Direccion y Persona
// type Direccion = {
//   numero: number;
//   calle: string;
//   pais: string;
// };

// type Persona = {
//   readonly id: number;
//   name: string;
//   talla: Talla;
//   direccion: Direccion;
// };

// const objeto: Persona = {
//   id: 1,
//   name: "Hola Mundo",
//   talla: Talla.Mediana,
//   direccion: {
//     numero: 1,
//     calle: "Siempre viva",
//     pais: "Chanchitolandia",
//   },
// };

// // Solo van a poder existir elementos de Persona
// const arr: Persona[] = [];

// // arrow functions
// const fn: (a: number) => string = (edad: number) => {
//   if (edad > 17) return "Puedes Ingresar";
//   return "no puedes pasar";
// };

// // functions
// function validaEdad(edad: number, msg: string = "chanchito feliz"): string {
//   if (edad > 17) return `puedes ingresar ${msg}`;
//   return "no puedes pasar";
// }

// validaEdad(18);

// // NEVER
// // lanza un error
// function ErrorUsuario(): never {
//   throw new Error("error de usuario");
// }

// // TODO: Union Type
// let puntaje: number | string = 98;

// puntaje = "muy bueno";

// type Animal = {
//   id: number;
//   estado: string;
// };

// type User = {
//   id: number;
//   name: string;
// };

// //se combinan los dos tipos, por lo que finalmente animal va a tener las propiedades de el tipo user y el tipo animal
// let animal: User | Animal = { id: 1, estado: "", name: "" };

// function sumaDos(n: number | string): number {
//   if (typeof n === "number") return n + 2;
//   return parseInt(n) + 2;
// }

// //Intersection Types, conjunto de tipos por ejemplo para un objeto
// type Audit = {
//   created_at: string;
//   modified_at: string;
// };

// type Product = {
//   name: string;
// };

// const product: Audit & Product = {
//   created_at: "",
//   modified_at: "",
//   name: "",
// };

// //Literal Types
// type Fibo = 0 | 1 | 2 | 3 | 5;
// const nDeFibo: Fibo = 1;

// function toNumber(s: string | null | undefined) {
//   if (!s) return 0;
//   return parseInt(s);
// }
// ///////
// const n = toNumber(null);

// function getUser(id: number) {
//   if (id < 0) return null;
//   return {
//     id: 1,
//     name: "Felipe",
//     created_at: new Date(),
//   };
// }

// const user = getUser(1);

// console.log("user", user?.created_at);
// // if (user && user.created_at) {
// //   console.log(user.created_at);
// // }

// const arr1 = null;
// console.log(arr1?.[0]);

// const fn5: any = null;
// console.log(fn5?.());

// // function cb(fn){
// //   if(fn) fn()
// // }

// // nullish coalescing operator

// const difficulty: number | null = 0;
// const user2 = {
//   username: "nahuel",
//   difficulty: difficulty ?? 1,
// };
// console.log(user2);
// //////

// //type assertion
// const elem: any = null;

// const elem1 = elem as number;

// const input = <HTMLInputElement>document.getElementById("username");
// //////

// // TYPE Narrowing
// function Lala(x: string | number) {
//   //type narrowing
//   if (typeof x === "number") x.toExponential;
//   if (typeof x === "string") x.charAt;
// }

// // function procesa(algo: unknown) {
// //   if (typeof algo === "string") return algo.toUpperCase();
// //   if (typeof algo === "number") return algo.toString();
// //   if (typeof algo instanceof String) return algo;

// //   algo.haceCosas();
// //   algo.otrasCosas();
// //   algo.genkidama();
// // }
class Personaje {
  profesion?: string;
  // las propiedades "private" solo pueden ser accedidas por la clase
  private static equipo: number = 1;

  constructor(
    public readonly id: number,
    public name: string,
    public nivel: number,
    private _hp: number
  ) {}

  subirNivel(): number {
    this.nivel = this.nivel + 1;
    return this.nivel;
  }

  static agregarPersonaje(): void {
    Personaje.equipo++;
  }

  cambiarHP(cantidad: number): number {
    this._hp = this._hp + cantidad;
    // no pasarse del maximo
    return this._hp;
  }

  //getters: metodo para obtener los datos de la propiedad hp
  get hp(): number {
    return this._hp;
  }

  static getEquipo(): number {
    return Personaje.equipo;
  }
}

const personaje = new Personaje(1, "Nahuel", 1, 100);
personaje.cambiarHP(-10);

const personaje1 = new Personaje(2, "John", 1, 120);
Personaje.agregarPersonaje();
console.log(Personaje.getEquipo());

if (personaje instanceof Personaje) {
}
