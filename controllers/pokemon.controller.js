import express from "express";
import { pokemonService } from "../index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("pokemon home");
});

router.get("/:name", async (req, res) => {
  const pokemonName = req.params.name;

  const response =
    await pokemonService.getShakespeareanDescriptionByPokemonName(pokemonName);

  if (response.success) {
    res.send({
      name: pokemonName,
      description: response.data,
    });
  } else {
    res.status(404);
    res.send({ success: false, message: response.message });
  }
});

export { router as pokemonController };
