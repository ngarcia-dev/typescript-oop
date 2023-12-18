// Interface sirve para definir propiedades y metodos de una clase sin definirla
interface Animal {
  name: string;
  caminar(): void;
  onomatopeya(): string;
}

class Caballo implements Animal {
  name: string = "Rocinante";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "nei";
  }
}

class Cerdo implements Animal {
  name: string = "Chanchito feliz";

  caminar() {
    console.log("Caminando");
  }

  onomatopeya(): string {
    return "oink";
  }
}

class Perro implements Animal {
  name: string = "Luki";
  caminar(): void {
    console.log("Caminando");
  }
  onomatopeya(): string {
    return "guau";
  }
}

/**Index Signatures */
class DiccionarioUsuarios {
  [id: string]: string;
}

let diccionarioUsuarios = new DiccionarioUsuarios();
diccionarioUsuarios["1a"] = "usuario1";
diccionarioUsuarios["2a"] = "usuario2";
console.log(diccionarioUsuarios);
/** */
