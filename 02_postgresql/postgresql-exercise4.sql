-- Exercise 4
-- Write a query to find the three cheapest items available on the menu.
SELECT * FROM MenuItems
ORDER BY price ASC
LIMIT 3;