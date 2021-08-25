import axios from "axios";

const SHAKESPEARE_API = process.env.SHAKESPEARE_API;

class ShakespeareService {
  constructor() {}

  async translate(text) {
    const payload = { text };

    const res = await axios.post(`${SHAKESPEARE_API}`, payload);

    return res?.data?.contents?.translated;
  }
}

export default ShakespeareService;
