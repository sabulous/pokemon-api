import axios from "axios";

const SHAKESPEARE_API = "https://api.funtranslations.com/translate/shakespeare";

class ShakespeareService {
  constructor() {}

  async translate(text) {
    const payload = { text };

    const res = await axios.post(`${SHAKESPEARE_API}`, payload);

    return res?.data?.contents?.translated;
  }
}

export default ShakespeareService;
