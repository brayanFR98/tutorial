// crear una veterenaria que recibe animales y decidir que animal es ave, acuatico, terrestre
// en archivos separados
import { IAnimal, IAcuatico, ITerrestre, IAve } from "./interfaces";
import { Acuatico, BaseAnimal, Terrestre, Ave } from "./models";

// const Killua: Terrestre = new Terrestre("Killua", "Perro", 10, 12.5, 45.4, 4, "Pradera");
// const Simba: Terrestre = new Terrestre("Simba", "Leon", 8, 80, 60, 4, "Tropical");
// const Capibara: Terrestre = new Terrestre("Capi", "Capibara", 10, 12.5, 45.4, 4, "Tropical");

// const Mojarrita: Acuatico = new Acuatico("Pepe", "Mojarra", 1, 0.6, 10, 3, "Branqueas", "Dulce");
// const Tiburoncin: Acuatico = new Acuatico("Hector", "Tiburon", 4, 120, 150, 4, "Branqueas", "Salado");
// const Pulpo: Acuatico = new Acuatico("Octavio", "Pulpo", 2, 5, 60, 8, "Branqueas", "Salado");

// const Gallina: Ave = new Ave("Frida", "Gallina", 2, 5, 60, 2, false);
// const Pinguino: Ave = new Ave("Romeo", "Pinguino", 2, 5, 120, 2, false);
// const Halcon: Ave = new Ave("Chamber", "Halcon", 4, 12, 40, 2, true);


// let animales: BaseAnimal[] = [Killua, Simba, Capibara, Mojarrita, Tiburoncin, Pulpo, Gallina, Pinguino, Halcon];

// let cubo: Terrestre;
// cubo = new Terrestre("Cubo", "Perro", 3, 8.5, 45.4, 4, "Artico");
// animales.push(cubo);

const express = require('express');
const app = express();
const port = 3000;

// Middleware para analizar cuerpos JSON
app.use(express.json());

// Middleware para analizar cuerpos de formulario URL-encoded
app.use(express.urlencoded({ extended: true }));

const animalRouter = require('./routes/animal');
app.use('/animal', animalRouter);

app.listen(port, () => { 
    console.log("server listen to localhost");
});
