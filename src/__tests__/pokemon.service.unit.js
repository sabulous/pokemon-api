import axios from "axios";
import { pokemonService } from "../index.js";
import { POKEMON_API } from "../services/pokemon.service.js";
import pokeapiGetResponse from "./helpers/pokeapiGetResponse.js";

jest.mock("axios");

describe("PokemonService", () => {
  const inputText =
    "When several of these POKéMON gather, their electricity could build and cause lightning storms.";
  const translatedText =
    "At which hour several of these pokémon gather,  their electricity couldst buildeth and cause lightning storms.";

  describe("getDescriptionByName", function () {
    it("should get pokemon description", async function () {
      axios.get.mockResolvedValueOnce(pokeapiGetResponse);
      const response = await pokemonService.getDescriptionByName("pikachu");

      expect(axios.get).toHaveBeenCalledWith(`${POKEMON_API}/pikachu`);
      expect(response).toEqual(
        "When several of these POKéMON gather, their electricity could build and cause lightning storms."
      );
    });

    it("should throw error if API call fails", async function () {
      axios.get.mockRejectedValueOnce(new Error("Error: Description is null."));

      expect(
        pokemonService.getDescriptionByName("pika")
      ).rejects.toThrowError();
    });
  });
});
