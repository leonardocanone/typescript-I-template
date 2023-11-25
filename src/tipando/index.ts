import { TCarro, frota } from "./frota";

function buscarCarrosPorMarca(frota: TCarro[], marca?: string): TCarro[] {
  if (marca === undefined) {
    return frota
  }

  return frota.filter(
    (carro: TCarro) => {
      return carro.marca === marca
    }
  )
}

console.log(buscarCarrosPorMarca(frota, "Toyota"));
