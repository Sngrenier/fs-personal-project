require('dotenv').config();
const express = require('express'),
    userCtrl = require('./controllers/user'),
    cartCtrl = require('./controllers/cart')
    massive = require('massive'),
    session = require('express-session')
    //path = require('path')


const app = express();

const { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json());

app.use(
    session({
        secret: SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        cookie: {maxAge: 1000 * 60 * 60 * 24}
    })
)
    
//Massive ALWAYS follows use and is ALWAYS before Endpoints
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false}
}) .then((db) => {
    app.set('db', db)
    console.log('db connected')
}) .catch((err) => console.log(err))


//Auth Endpoints
app.post('/api/auth/register', userCtrl.register);
app.post('/api/auth/login', userCtrl.login);
app.get('/api/auth/me', userCtrl.getUser);
app.post('/api/auth/logout', userCtrl.logout);

//Search Endpoints
// app.get(`/api/storeProducts`, ctrl.getProducts)
// app.get(`/api/storeProducts/:search`, ctrl.postSearch)


//Products 
app.get(`/api/products`, cartCtrl.getProducts)
app.get(`/api/cart`, cartCtrl.getCart)
app.post(`/api/addToCart`, cartCtrl.addToCart)
app.delete(`/api/deleteItem/:item_id`, cartCtrl.deleteItem)
app.put(`/api/increment/:item_id`, cartCtrl.increment)
app.put(`/api/decrement/:item_id`, cartCtrl.decrement) 
app.post(`/api/clearCart`, cartCtrl.clearCart)


app.listen(SERVER_PORT, () => {
    console.log(`Server running on port ${SERVER_PORT}`)
})

// HOSTING:
// Add this to the end of server index:
//  app.use(express.static(__dirname + '../build/index.html'))

//  app.get('*', (req, res)=> {
//    res.sendFile(path.join(__dirname, '../build/index.html'))
//  })

// Just in case there are typos above, this is copied from instructor
// app.use( express.static( `${__dirname}/../build`));

// app.get('*', (req,res)=> { 
// res.sendFile(path.join(__dirname, '../build/index.html')) 
// })

// then run npm run build in terminal (make sure you're in root)
// then yoyu don't need npm start to run this, you only need nodemon