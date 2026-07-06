// Connect to the sample_mflix database
use("sample_mflix");

db.movies.find({ type: "movie", rated: "TV-G" });
