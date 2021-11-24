const CANDIES_DB = ["Mars", "Maltesers", "Skittles", "Fraise Tagada"];

const fetchCandiesFromDatabase = (callback) => {
  setTimeout(() => {
    callback(CANDIES_DB);
  }, 2000);
};

const handleResult = (result) => {
  console.log(result);
};

fetchCandiesFromDatabase(handleResult);
