// connect to the sample_mflix database
use("sample_mflix");

// Exercise 4 - Regex in MongoDB Query

// 4.1 How many movies mentioned American in their plot?
// 557 movies
db.movies.countDocuments({
  plot: { $regex: "American", $options: "i" }, // $options: "i" means case-insensitivity
});

// 4.2 How many movies does end plot (sentence) with the word street.
// 8 movies
db.movies.countDocuments({
  plot: { $regex: "street.$", $options: "i" },
});

// 4.3 What does the data of above examples look like?
// document that mention American in plot
db.movies.find({
  plot: { $regex: "American", $options: "i" },
});

// document that plot end with street
db.movies.find({
  plot: { $regex: "street.$", $options: "i" },
});
