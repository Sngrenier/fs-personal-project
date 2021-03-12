UPDATE cart_items 
SET quantity = quantity +1 
WHERE item_id = $1 AND cart_id = $2