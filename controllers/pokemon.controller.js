import express from "express";
import { pokemonService } from "../index.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("pokemon home");
});

router.get("/:name", async (req, res) => {
  const pokemonName = req.params.name;

  const description = await pokemonService.getShakespeareanDescriptionByName(
    pokemonName
  );

  res.send({
    name: pokemonName,
    description,
  });
});

export { router as pokemonController };
