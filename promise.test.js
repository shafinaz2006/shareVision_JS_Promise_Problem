const getPromise = require("./promise");

describe("test getPromise function", () => {
  test("should reject for url", () => {
    return expect(getPromise("url")).rejects.toBe("Promise rejected")
  })
  
  test("should reject for omdb url", () => {
    return expect(
      getPromise("https://www.omdbapi.com/?i=tt3896198&apikey=4bb50978")
    ).rejects.toBe("Promise rejected. No return value")
  })

  //failed test case

  test("should resolve for omdb url", () => {
    return expect(
      getPromise("https://www.omdbapi.com/?i=tt3896198&apikey=4bb50978")
    ).resolves.toBe("Promise resolved. Return Value is 1")
  })
})
