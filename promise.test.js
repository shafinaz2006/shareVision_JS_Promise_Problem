const getPromise = require("./promise");

describe("checkValue function", () => {
  test("should reject for url", () => {
    return expect(getPromise("url")).rejects.toBe("Promise rejected");
  });
  
  test("should reject for omdb url", () => {
    return expect(
      getPromise("https://www.omdbapi.com/?i=tt3896198&apikey=4bb50978")
    ).rejects.toBe("Promise rejected. No return value");
  });
});
