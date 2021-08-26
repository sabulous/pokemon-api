import axios from "axios";
import { pokemonService } from "../index.js";
import { POKEMON_API } from "../services/pokemon.service.js";
import pokeapiGetResponse from "./helpers/pokeapiGetResponse.js";

jest.mock("axios");

describe("PokemonService", () => {
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

      try {
        await pokemonService.getDescriptionByName("pika");
      } catch (e) {
        expect(e).toEqual(new Error("Error: Description is null."));
      }
    });
  });
});
