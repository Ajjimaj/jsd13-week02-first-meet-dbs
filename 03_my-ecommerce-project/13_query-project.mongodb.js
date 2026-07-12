use("my-ecommerce-project");

// find all users
// db.users.find({});

// find all products
// db.products.find({});

// find all orders
// db.orders.find({});

// find all order_items
// db.order_items.find({});

// db.products.findOne({ _id: "P00009" });

//
/*db.orders
  .find({
    total_price: { $gte: 500 },
  })
  .sort({ total_price: -1 });*/

// Find top 3 spenders
/*db.orders.aggregate([
  {
    $lookup: {
      from: "users",
      localField: "user_id",
      foreignField: "_id",
      as: "user_info",
    },
  },
  { $unwind: "$user_info" },
  { $sort: { total_price: -1 } },
  { $limit: 3 },
]);*/

db.order_items.aggregate([
  // 1.
  {
    $lookup: {
      from: "orders",
      localField: "order_id",
      foreignField: "_id",
      as: "orders_info",
    },
  },
  { $unwind: "$orders_info" },

  // 2.
  {
    $lookup: {
      from: "users",
      localField: "orders_info.user_id",
      foreignField: "_id",
      as: "users_info",
    },
  },
  { $unwind: "$users_info" },

  // 3.
  {
    $lookup: {
      from: "products",
      localField: "product_id",
      foreignField: "_id",
      as: "products_info",
    },
  },
  { $unwind: "$products_info" },
]);
