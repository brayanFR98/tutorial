import { IAcuatico } from "../interfaces";
import { BaseAnimal } from "./Animal";


export class Acuatico extends BaseAnimal implements IAcuatico {
    public Aletas: number;
    public Respiracion: "Branqueas" | "Espiraculo";
    public TipoAgua: "Salado" | "Dulce";

    constructor(Nombre: string, Especie: string, Edad: number, Peso: number, Altura: number, Aletas: number, Respiracion: "Branqueas" | "Espiraculo", TipoAgua: "Salado" | "Dulce") {
        super(Nombre, Especie, Edad, Peso, Altura),
        this.Aletas = Aletas,
        this.Respiracion = Respiracion,
        this.TipoAgua = TipoAgua
    }

    
}

