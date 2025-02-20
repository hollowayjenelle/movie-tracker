import populateGenres from "./populateGenres.js";
import populateMovies from "./populateMovies.js";

const populateAll = async () => {
  try {
    await populateGenres();
    console.log("Genres table populated successfully");

    await populateMovies();
    console.log("Movies table populated successfully");
  } catch (error) {
    console.error("Unable to populate tables", error);
  }
};

export default populateAll;
