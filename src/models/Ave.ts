import { IAve } from "../interfaces";
import { BaseAnimal } from "./Animal";


export class Ave extends BaseAnimal implements IAve {
    public Alas: number;
    public Volador: boolean;

    constructor(Nombre: string, Especie: string, Edad: number, Peso: number, Altura: number, Alas: number, Volador: boolean) {
        super(Nombre, Especie, Edad, Peso, Altura),
            this.Alas = Alas,
            this.Volador = Volador
    }
}

