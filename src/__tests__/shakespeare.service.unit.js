import axios from "axios";
import { shakespeareService } from "../index.js";
import { SHAKESPEARE_API } from "../services/shakespeare.service.js";
import shakespearePostResponse from "./helpers/shakespearePostResponse";

jest.mock("axios");

describe("ShakespeareService", function () {
  const inputText =
    "When several of these POKéMON gather, their electricity could build and cause lightning storms.";
  const translatedText =
    "At which hour several of these pokémon gather,  their electricity couldst buildeth and cause lightning storms.";

  describe("translate", function () {
    it("should translate given text", async function () {
      axios.post.mockResolvedValueOnce(shakespearePostResponse);
      const response = await shakespeareService.translate(inputText);

      expect(response).toEqual(translatedText);
    });

    it("should throw error if API call fails", async function () {
      axios.get.mockRejectedValueOnce(
        new Error("Error: A problem occurred while translating description.")
      );
      expect(shakespeareService.translate(inputText)).rejects.toThrowError();
    });
  });
});
