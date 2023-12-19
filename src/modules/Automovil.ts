interface transporte {
  model:string
}

class Automovil {
  constructor(protected id: number, public model: string, public km: number) {}

  run(km: number) {
    this.km = km;
    return (km += 1);
  }
}

const auto = new Automovil(1, "EcoSport", 0);
auto.run(100);
console.log(auto);
