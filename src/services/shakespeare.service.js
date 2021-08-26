import axios from "axios";

export const SHAKESPEARE_API = process.env.SHAKESPEARE_API;

class ShakespeareService {
  constructor() {}

  async translate(text) {
    try {
      const payload = { text };
      const res = await axios.post(SHAKESPEARE_API, payload);
      return res?.data?.contents?.translated;
    } catch (e) {
      throw new Error(
        "Error: A problem occurred while translating description."
      );
    }
  }
}

export default ShakespeareService;
