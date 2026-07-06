// connect to the sample_mflix database
use("sample_mflix");

// Exercise 3

// 3.1 How many theaters does AL state has?
db.theaters.find({ "location.address.state": "AL" }).count(); // 19 theaters

// check documents for theaters in AL state
db.theaters.find({ "location.address.state": "AL" }).limit(5);

// 3.2 How many theaters does La Quinta city has?
db.theaters.find({ "location.address.city": "La Quinta" }).count(); // 1 theater

// 3.3 What is an example of each documents of above like?
// Documents for theaters in La Quinta
db.theaters.findOne({ "location.address.city": "La Quinta" });
