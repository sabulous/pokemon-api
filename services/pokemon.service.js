import axios from "axios";
import { shakespeareService } from "../index.js";

const POKEMON_API = "https://pokeapi.co/api/v2/pokemon-species";

class PokemonService {
  constructor() {}

  async getDescriptionByName(name) {
    const res = await axios.get(`${POKEMON_API}/${name}/`);
    const descriptions = res?.data?.flavor_text_entries;
    let englishDescriptions = [];

    if (descriptions) {
      for (const description of descriptions) {
        if (description.language.name === "en") {
          englishDescriptions.push(description.flavor_text);
        }
      }
      const formatted = englishDescriptions[0].replace(/[\n\f\t\r]/g, " "); // replace escape characters
      return formatted;
    } else {
      return null;
    }
  }

  async getShakespeareanDescriptionByPokemonName(name) {
    try {
      const englishDescription = await this.getDescriptionByName(name);

      const shakespeareanDescription = await shakespeareService.translate(
        englishDescription
      );

      if (!shakespeareanDescription) {
        throw new Error("Translation not available");
      }

      return { success: true, data: shakespeareanDescription };
    } catch (e) {
      return { success: false, message: e.message };
    }
  }
}

export default PokemonService;
