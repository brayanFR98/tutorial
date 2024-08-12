import { ITerrestre } from "../interfaces";
import { BaseAnimal } from "./Animal";


export class Terrestre extends BaseAnimal implements ITerrestre {
    public Patas: number;
    public Habitad: "Artico" | "Pradera" | "Tropical" | "Desierto";

    constructor(Nombre: string, Especie: string, Edad: number, Peso: number, Altura: number, Patas: number, Habitad: "Artico" | "Pradera" | "Tropical" | "Desierto") 
    {
        super(Nombre, Especie, Edad, Peso, Altura),
        this.Patas = Patas,
        this.Habitad = Habitad
    }
}

