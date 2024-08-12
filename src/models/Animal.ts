import { IAnimal } from "../interfaces";

export class BaseAnimal implements IAnimal {
    public Nombre: string;
    public Especie: string;
    public Edad: number;
    public Peso: number;
    public Altura: number;
    private IMC: number = 0;
    constructor(Nombre: string, Especie: string, Edad: number, Peso: number, Altura: number) {
        this.Nombre = Nombre,
        this.Especie = Especie,
        this.Edad = Edad,
        this.Peso = Peso,
        this.Altura = Altura,
        this.setIMC(Peso, Altura)
    }

    getIMC() {
        return this.IMC;
    }

    setIMC(peso: number, altura: number) {
        if (peso <= 0 || altura <= 0) {
            throw new Error("El peso y la altura deben ser mayores que cero.");
        }
        const imc = peso / (altura * altura);
        this.IMC = parseFloat(imc.toFixed(2));
    }
}

// const clasificar = (animales: IAnimal[]) => {
//     const Acuaticos = animales.filter(Animal => Animal instanceof Acuatico);
//     const Terrestres = animales.filter(Animal => Animal instanceof Terrestre);
//     const Aves = animales.filter(Animal => Animal instanceof Ave);
//     // const Aves = animales.filter(Animal => isInstanceOf(Animal, Ave));

//     return { Acuaticos: Acuaticos, Terrestres: Terrestres, Aves: Aves }
// }


// console.log(clasificar(animales));
