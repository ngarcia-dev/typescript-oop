/**
 * La herencia es una forma de compartir atributos y metodos entre clases
 *
 * Producto
 * name
 * desc
 * created_at
 * created_by
 * stock
 * sku
 *
 * Categoria
 * name
 * desc
 * created_at
 * created_by
 */

// las clases abstractas no pueden ser instanciadas pero si se pueden heredar
abstract class DatosBasicos {
  constructor(
    public name: string,
    public desc: string,
    protected created_at: Date,
    protected created_by: number // las propiedades protected solo son accesibles dentro de la clase y sus subclases
  ) {}

  get fullYear() {
    return this.created_at.getFullYear();
  }

  get fullDesc() {
    return this.name + " - " + this.desc;
  }

  abstract guardar(): void;
}

class Producto extends DatosBasicos {
  constructor(
    public stock: number,
    public sku: number,
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  override get fullDesc() {
    return "Producto: " + super.fullDesc;
  }

  guardar() {
    console.log("Guardando...");
  }
}

class Categoria extends DatosBasicos {
  public productos: Producto[] = [];
  constructor(
    name: string,
    desc: string,
    created_at: Date,
    created_by: number
  ) {
    super(name, desc, created_at, created_by);
  }

  agregarProducto(producto: Producto) {
    this.productos.push(producto);
  }

  override get fullDesc() {
    //override sirve para sobreescribir un metodo de la clase padre
    return "Categoria: " + super.fullDesc;
  }

  guardar() {
    console.log("Guardando...");
  }
}

let producto1 = new Producto(100, 1, "s23ultra", "smartphone", new Date(), 1);

let categoria = new Categoria("Smartphone", "Samsung", new Date(), 1);

categoria.agregarProducto(producto1);

console.log(producto1.fullDesc);
