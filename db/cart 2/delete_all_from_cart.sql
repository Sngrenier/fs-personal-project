DELETE * 
FROM cart_items 
WHERE item_id = $1
AND cart_id = $2