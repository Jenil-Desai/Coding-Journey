const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
const { constants } = require("buffer");
const { v4: uuidv4 } = require("uuid");
const bodyParser = require("body-parser");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Jenil@0911",
});

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));
app.use(bodyParser.urlencoded({ extended: false }));

app.listen("8080", () => {
  console.log("Listening On Port 8080");
});

app.get("/", (req, res) => {
  let q = "SELECT COUNT(*) FROM user";

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["COUNT(*)"];
      res.render("home.ejs", { count });
    });
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

app.get("/user", (req, res) => {
  let deletedUser = req.query.deletedUser;
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, users) => {
      if (err) throw err;
      res.render("showUsers.ejs", { users, deletedUser });
    });
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

app.get("/user/:id/edit", (req, res) => {
  try {
    let { id } = req.params;
    let q = "SELECT * FROM user WHERE id = ?";

    connection.query(q, id, (err, result) => {
      if (err) throw err;
      res.render("edit.ejs", { result });
    });
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

app.patch("/user/:id", (req, res) => {
  try {
    let { id } = req.params;
    let { username, formPassword } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPassword != user.password) {
        res.render("edit.ejs", { result, message: "Wrong Password" });
      } else {
        let q2 = `UPDATE user SET username='${username}' WHERE id='${id}'`;

        connection.query(q2, (err, result) => {
          res.redirect("/user");
        });
      }
    });
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

app.delete("/user/:id", (req, res) => {
  try {
    let { id } = req.params;
    let q = `DELETE FROM user WHERE id='${id}'`;

    let q2 = `SELECT username FROM user WHERE id='${id}'`;
    let username;

    connection.query(q2, (err, result) => {
      if (err) throw err;
      username = result[0].username;
    });

    connection.query(q, (err, result) => {
      if (err) throw err;
      res.redirect(`/user?deletedUser=${username}`);
    });
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

app.get("/user/add", (req, res) => {
  try {
    res.render("add.ejs");
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});

app.post("/user", (req, res) => {
  try {
    let { username, email, password } = req.body;
    let id = uuidv4();
    let q = `INSERT INTO user (id, username, email, password) VALUES (?, ?, ?, ?)`;
    let values = [id, username, email, password];

    connection.query(q, values, (err, result) => {
      if (err) throw err;
      res.redirect("/user");
    });
  } catch (error) {
    console.log(error);
    res.send("Internal Server Error");
  }
});
