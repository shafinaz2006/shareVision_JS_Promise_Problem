const getPromise = (url) => {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.returnValue === 1) resolve("Promise resolved. Return Value is 1")
        else if (data.returnValue === 0) reject("Promise rejected. Return Value is 0")
        else reject("Promise rejected. No return value")
      })
      .catch((error) => {
        reject("Promise rejected");
      });
  });
};

let url = "testURL"
// let url = "https://www.omdbapi.com/?i=tt3896198&apikey=4bb50978"
getPromise(url)
  .then((success) => {
    console.log("Success:", success);
  })
  .catch((error) => {
    console.log("Error:", error);
  });