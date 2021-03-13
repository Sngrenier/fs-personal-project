module.exports= {
    getProducts: async (req, res) => {
        const db = req.app.get('db')
        const products = await db.products.get_products()
        res.status(200).send(products)
    },
    getCart: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const cart = await db.cart.get_cart(id)
        res.status(200).send(cart)
    },
    addToCart: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.body
        const [cart_info] = await db.cart.get_cart_info(id)
        await db.cart.add_to_cart(cart_info.cart_id, item_id)
        const cart = await db.cart.get_cart(id)
        res.status(200).send(cart)
    },
    deleteItem: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {item_id} = req.params
        const [cart_info] = await db.cart.get_cart_info(id)
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
        console.log('hello')
        const db = req.app.get('db')
        const {id} = req.session.user
        const [cart_info] = await db.cart.get_cart_info(id)
        await db.cart.delete_all_from_cart(cart_info.cart_id)
        const cart = await db.cart.get_cart(id)
        res.status(200).send(cart)
    },
    getDetailProduct: async (req, res) => {
        const db = req.app.get('db')
        const {item_id} = req.params
        const [detailProduct] = await db.products.get_product(item_id)
        res.status(200).send(detailProduct)
    }
}