SELECT * category_items
JOIN items
ON category_items.category_id = items.item_id
JOIN categories
ON category_items.item_id = items.item_id
WHERE items.item_id = $1