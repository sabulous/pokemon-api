import axios from "axios";

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
      return englishDescriptions[0].replace(/[\n\f\t]/g, " ");
    } else {
      return null;
    }
  }

  async getShakespeareanDescriptionByName(name) {
    const englishDescription = await this.getDescriptionByName(name);
    // TODO: translate to Shakespearean
    return englishDescription;
  }
}

export default PokemonService;
