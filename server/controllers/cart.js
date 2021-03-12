module.exports= {
    getProducts: async (req, res) => {
        const db = req.app.get('db')
        const products = await db.products.get_products()
        res.status(200).send(products)
    },
    getCart: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        console.log(req.session.user)
        const cart = await db.cart.get_cart(id)
        console.log(cart)
        res.status(200).send(cart)
    },
    addToCart: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.body
        const [cart_info] = await db.cart.get_cart_info(id)
        console.log(cart_info)
        await db.cart.add_to_cart(cart_info.cart_id, item_id)
        const cart = await db.cart.get_cart(id)
        console.log(cart)
        res.status(200).send(cart)
    },
    deleteItem: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.params
        const [cart_info] = await db.cart.get_cart_info(id)
        console.log(cart_info)
        await db.cart.delete_from_cart(item_id, cart_info.cart_id)
        const cart = await db.cart.get_cart(id)
        res.status(200).send(cart)
    },
    increment: async(req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.params
        const [cart_info] = await db.cart.get_cart_info(id)
        await db.cart.increment(item_id, cart_info.cart_id)
        const cart = await db.cart.get_cart(id)
        res.status(200).send(cart)
    },
    decrement: async(req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.params
        const {quantity} = req.body
        if(quantity > 1) {
            const [cart_info] = await db.cart.get_cart_info(id)
            await db.cart.decrement(item_id, cart_info.cart_id)
            const cart = await db.cart.get_cart(id)
            res.status(200).send(cart)
        } else {
            const [cart_info] = await db.cart.get_cart_info(id)
            await db.cart.delete_from_cart(item_id, cart_info.cart_id)
            const cart = await db.cart.get_cart(id)
            res.status(200).send(cart)
        }
    },
    clearCart: async(req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.params
        const [cart_info] = await db.cart.get_cart_info(id)
        await db.cart.delete_all_from_cart(item_id, cart_info.cart_id)
        const cart = await db.cart.get_cart(id)
        res.status(200).send(cart)
    }
}