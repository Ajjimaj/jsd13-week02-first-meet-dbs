// Connect to the sample_mflix database
use("sample_mflix");

// Excercise 1
// fethch all documents from the comments collection.
// db.comments.find();

// Fetch only one user from comments collection by _id = ObjectId(“5a9427648b0beebeb69579f5”).
db.comments.findOne({ _id: ObjectId("5a9427648b0beebeb69579f5") });

// fetch only one user from comments collection by email = “john_bishop@fakegmail.com”.

// fetch only one user from comments collection by name = “John Bishop”.
