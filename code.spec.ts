import { describe, expect, test } from "@jest/globals";
import { splitArticleIntoChunks, wordCount } from "./code-suggestion";

const fooText =
  "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

describe("Test code implementation", () => {
  describe("splitArticleIntoChunks()", () => {
    test("returns a list", () => {
      const splitText = splitArticleIntoChunks(fooText);
      expect(Array.isArray(splitText)).toBe(true);
    });

    test("contents of list is no longer than 140 characters", () => {
      const splitText = splitArticleIntoChunks(fooText);
      splitText.forEach((clipping) => {
        expect(clipping.length <= 140).toBe(true);
      });
    });

    test("splits text into chunks with a maximum length of 140 characters", () => {
      const splitText = splitArticleIntoChunks(fooText);
      expect(splitText.every((clipping) => clipping.length <= 140)).toBe(true);
    });

    test("correctly splits text into chunks", () => {
      const splitText = splitArticleIntoChunks(fooText);
      const concatenatedText = splitText.join(" ");
      expect(concatenatedText).toEqual(fooText);
    });
  });

  describe("wordCount()", () => {
    const barText = "A simple text a short snippet like text.";
    const words = wordCount(barText);
    test("returns an object", () => {
      expect(words).toBeInstanceOf(Object);
    });

    test("returns count", () => {
      const count = {
        a: 2,
        simple: 1,
        text: 2,
        short: 1,
        snippet: 1,
        like: 1,
      };
      expect(words).toEqual(count);
    });

    test("returns count with sanitized capitalization", () => {
      const correctCount = {
        a: 2,
        simple: 1,
        text: 2,
        short: 1,
        snippet: 1,
        like: 1,
      };
      expect(words).toEqual(correctCount);
    });

    test("handles empty string", () => {
      const emptyText = "";
      const emptyWords = wordCount(emptyText);
      expect(emptyWords).toEqual({});
    });

    test("handles string with only spaces", () => {
      const spaceText = "   ";
      const spaceWords = wordCount(spaceText);
      expect(spaceWords).toEqual({});
    });
  });
});
