import { IAnimal } from "../interfaces";
import { Acuatico, BaseAnimal, Terrestre, Ave } from "../models";
import express, { Request, Response } from 'express';

const router = express.Router();

const Killua: Terrestre = new Terrestre("Killua", "Perro", 10, 12.5, 45.4, 4, "Pradera");

const Tiburoncin: Acuatico = new Acuatico("Hector", "Tiburon", 4, 120, 150, 4, "Branqueas", "Salado");

let Animales: BaseAnimal[] = [Killua, Tiburoncin];

router.post('/', (req: Request, res: Response) => {
    // console.log(req.body);
    try {
        let animal2: BaseAnimal;
        const perrito = req.body;
        console.log(perrito, perrito.terrestre);

        if (perrito.terrestre) {
            const { Nombre, Especie, Edad, Peso, Altura, Patas, Habitad } = perrito.terrestre;

            animal2 = new Terrestre(Nombre, Especie, Edad, Peso, Altura, Patas, Habitad);
            
            Animales.push(animal2);
        }
        // if (req.body.terrestre) {
        //     const { nombre, especie, edad, peso, altura, patas, habitad } = req.body.terrestre;

        //     // Crea una nueva instancia de Terrestre utilizando los valores extraídos
        //     animal2 = new Terrestre(nombre, especie, edad, peso, altura, patas, habitad);
        //     Animales.push(animal2);
        // }
        // const animal: Terrestre | Acuatico | Ave = req.body; // Asume que estás enviando los datos como JSON en el cuerpo de la solicitud
        res.status(201).send(JSON.stringify(Animales)); // Envía la respuesta de éxito con el objeto creado

    }
    catch (error) {
        res.status(500).send("error");
    }
});

router.get('/', (req: Request, res: Response) => {
    const clasificacion = clasificar(Animales);
    res.status(200).json(clasificacion); // Envía la clasificación como respuesta JSON
});

const clasificar = (animales: IAnimal[]) => {
    const Acuaticos = animales.filter(Animal => Animal instanceof Acuatico);
    const Terrestres = animales.filter(Animal => Animal instanceof Terrestre);
    const Aves = animales.filter(Animal => Animal instanceof Ave);
    // const Aves = animales.filter(Animal => isInstanceOf(Animal, Ave));

    return { Acuaticos: Acuaticos, Terrestres: Terrestres, Aves: Aves }
}

module.exports = router;
