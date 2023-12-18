// function log<T, V>(a: T, b: V): V {
//   console.log(a, b);
//   return b;
// }

// log<string, number>("dato", 42);
// log<string, string>("dato", "chancho");

// const a = log("chancho", 1);

// function returnT(): number {
//   return a;
// }

/**Genericos en funciones */

async function fetchData<T>(resource: string): Promise<T> {
  const response = await fetch(`${resource}`);
  return response.json();
}

type User = {
  id: string;
  name: string;
};

async function main() {
  const user = await fetchData<User>("/users");
  user.name;
}

/**Genericos en clases */

type Computer = {
  on: () => string;
  off: () => string;
};

class Programer<T> {
  computer: T;
  constructor(t: T) {
    this.computer = t;
  }
}

const programer = new Programer<Computer>({ off: () => "off", on: () => "on" });
console.log(programer.computer.off);

/**Restricciones en genercios */

interface Usuario {
  id: string;
  name: string;
}

class UserId {
  constructor(public id: string, public lastname: string) {}
}

function print<T extends UserId>(t: T): T {
  console.log(t);
  return t;
}

print({ id: "user_id", name: "felipe", lastname: "garcia" });

/**Genericos y Herencia */

class Estado<T> {
  protected data: T[] = [];
  agregar(t: T): void {
    this.data.push(t);
  }

  getEstado(): T[] {
    return this.data;
  }
}

type ObjetId = {
  id: string;
};

//Pasar generico con restricciones
class EstadoEliminar<T extends ObjetId> extends Estado<T> {
  eliminar(id: string) {
    this.data = this.data.filter((x) => x.id !== id);
  }
}

//Pasar el generico fijo
class EstadoUsuarios extends Estado<Usuario> {
  reiniciarContrasenas() {
    //acá logica
  }
}

const estadoUsuarios = new EstadoUsuarios();

/**Operador keyof */
type Calendar = {
  id: number;
  fuente: string;
  owner: string;
};

const calendar: Calendar = { id: 1, fuente: "Google", owner: "Yo" };

function getProp<T>(objeto: T, property: keyof T): unknown {
  return objeto[property];
}

getProp<Calendar>(calendar, "id");
getProp<Calendar>(calendar, "fuente");
// getProp<Calendar>(calendar, "propiedadQueNoExiste");

/**Utility Type */

type Punto = {
  x: number;
  y: number;
  desc?: string;
};

type PuntoOpcional = Partial<Punto>;
type PuntoRequerido = Required<Punto>;

const keyVal: Record<string, number> = {
  "soy un string ": 42,
};

type kv = {
  [key: string]: number;
};

const p: Omit<Punto, "desc" | "y"> = {
  x: 1,
  //y: 2,
};

const p1: Pick<Punto, "x" | "y"> = {
  x: 1,
  y: 2,
};

const readOnlyp: Readonly<Punto> = {
  x: 1,
  y: 3,
  desc: "soy una descripcion",
};

//readOnlyp.x = 23;
