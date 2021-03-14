SELECT * FROM cart_items 
JOIN cart 
ON cart_items.cart_id = cart.cart_id
JOIN items
ON cart_items.item_id = items.item_id
WHERE cart.user_id = $1;
-- AND cart.active = TRUE