UPDATE cart_items 
set quantity = quantity -1 
WHERE item_id = $1 AND cart_id = $2