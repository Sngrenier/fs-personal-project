require("dotenv").config();
const bcrypt = require("bcryptjs");
const nodemailer = require("nodemailer");

const { EMAIL_ADDRESS, PASSWORD } = process.env;

module.exports = {
  register: async (req, res) => {
    const {username, password, email, first_name, last_name, phone_number} = req.body;
    console.log(req.body);
    const db = req.app.get("db");
    const result = await db.user.find_user_by_username([username]);
    const newUser = result[0];
    if (newUser) {
      return res.status(409).send("Username taken!");
    };
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const createdUser = await db.user.create_user([username, hash, email, first_name, last_name, phone_number]);
    const user = createdUser[0];
    req.session.user = {id: user.user_id, username: user.username, email: user.email, first_name: user.first_name, last_name: user.last_name, phone_number: +user.phone_number};
    await db.cart.create_cart(user.user_id);
    res.status(201).send(req.session.user);
    
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: EMAIL_ADDRESS, pass: PASSWORD },
    });
    let emailMessage = {
      from: "marbleoakliving@gmail.com",
      to: req.session.user.email,
      subject: "Welcome to Marble Oak Living!",
      text: `Welcome ${req.session.user.first_name} to Marble Oak Living!`,
    };
    transporter.sendMail(emailMessage, function (err) {
      if (err) {
        console.log("email failed",err);
        res.sendStatus(405);
      } else {
        console.log("success");
        return res.status(200).send(req.session.user);
      }
    });
  },

  login: async (req, res) => {
    const { username, password } = req.body;
    console.log(req.body);
    const db = req.app.get("db");
    const foundUser = await db.user.find_user_by_username([username]);
    const user = foundUser[0];
    if (!user) {
      return res
        .status(401)
        .send(`Ooops! User not found. Looks like you need to register!`)
    }
    const isAuthenticated = bcrypt.compareSync(password, user.password);
    if (isAuthenticated) {
      req.session.user = {
        id: user.user_id,
        username: user.username,
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
        phone_number: +user.phone_number,
      };
      console.log(req.session.user);
      res.status(200).send(req.session.user);
    } else {
      return res
        .status(401)
        .send("Ooops. Incorrect Login Info. Please try again!");
    }
  },

  logout: (req, res) => {
    req.session.destroy();
    return res.sendStatus(200);
    // res.redirect('http://localhost:4001')
  },

  getUser: (req, res) => {
    if (req.session.user) {
      res.status(200).send(req.session.user);
    } else {
      res.status(404).send("Please Log In");
    }
  },
};

  //   usernameMiddleware: (req, res, next) => {
  //     if (req.body.username) {
  //       return next();
  //     } else {
  //       res.status(502).send("Please enter a username.");
  //     }
  //   },

  //   firstNameMiddleware: (req, res, next) => {
  //     if (req.body.first_name) {
  //       return next();
  //     } else {
  //       res.status(502).send("Please enter your name.");
  //     }
  //   },

  //   lastNameMiddleware: (req, res, next) => {
  //     if (req.body.last_name) {
  //       return next();
  //     } else {
  //       res.status(502).send("Please enter your name.");
  //     }
  //   },

  //   emailMiddleware: (req, res, next) => {
  //     if (req.body.email.includes("@")) {
  //     } else {
  //       res.status(502).send("Invalid Email");
  //     }
  //   },