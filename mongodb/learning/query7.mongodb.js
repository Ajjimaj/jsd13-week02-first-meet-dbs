// Connect to the sample_mflix database
use("sample_mflix");

// Silde: MongoDB for Web Developers (page 73-75)

// Example - Implicit AND (multiple field conditions)
// List all movies released in 1995 and clasified as "Action".
db.movies.find(
  {
    year: 1995, // condition 1
    genres: "Action", // condition 2 (implicit AND)
  },
  { _id: 0, title: 1, year: 1, genres: 1 },
  // projection == select filed
  // 1 = shown, 0 = not shown
  // Don't mix 1 and 0 in { } except for _id ex. {title: 1, year: 0, genres: 1 } not execute
);

db.movies.find(
  {
    year: 1995, // condition 1
    genres: "Action", // condition 2 (implicit AND)
  },
  // not select cast, fullplot, plot and poster
  { _id: 0, cast: 0, fullplot: 0, plot: 0, poster: 0 },
);

// Example - Explicit OR ($or array)
// Find movies whose primary spoken language is French or Spanish.
db.movies.find(
  {
    $or: [{ languages: "French" }, { languages: "Spanish" }],
  },
  { _id: 0, title: 1, year: 1, genres: 1, languages: 1 },
);

// Example - Combined AND + OR (nesting operators)
// Retrieve up to 10 movies that are released after 2010 and belong to the Drama genre or have IMDB rathing >= 8.
db.movies
  .find(
    {
      year: { $gt: 2010 },
      $or: [{ genres: "Drama" }, { imdb: { $gte: 8 } }],
    },
    { _id: 0, title: 1, year: 1, genres: 1, "imdb.rating": 1 },
  )
  .sort({ year: 1 }) // desc
  .limit(10);
