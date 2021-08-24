import express from "express";
import { pokemonController } from "./controllers/pokemon.controller.js";
import PokemonService from "./services/pokemon.service.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

app.use("/pokemon", pokemonController);

const pokemonService = new PokemonService();

export { pokemonService };
export default app;
