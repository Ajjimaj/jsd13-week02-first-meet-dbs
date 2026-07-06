// Connect to the sample_mflix database
use("sample_mflix");

// Exercise 2

// 2.1 What is an example of  type “movie” and rated “TV-G” look like?
db.movies.find({ type: "movie", rated: "TV-G" });

// 2.2 How many movies are there in “movie” type and “TV-G” rated?
db.movies.find({ type: "movie", rated: "TV-G" }).count(); // 58 movies
// db.movies.countDocuments({ type: "movie", rated: "TV-G" });
