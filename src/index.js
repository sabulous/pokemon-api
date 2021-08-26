import express from "express";
import cors from "cors";
import { pokemonController } from "./controllers/pokemon.controller.js";
import PokemonService from "./services/pokemon.service.js";
import ShakespeareService from "./services/shakespeare.service.js";

const app = express();
app.use(cors());

app.use("/pokemon", pokemonController);

const pokemonService = new PokemonService();
const shakespeareService = new ShakespeareService();

export default app;
export { pokemonService, shakespeareService };
