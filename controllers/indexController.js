const db = require("../models/db.js");

async function getAllUsers(req, res) {
  const { search } = req.query;
  const users = search != null ? await db.getFilteredUsers(search) : await db.getAllUsers();
  res.render("pages/index", { users: users, showForm: false });
}

async function showForm(req, res) {
  const users = await db.getAllUsers();
  res.render("pages/index", { users: users, showForm: true });
}

async function addNewUser(req, res) {
  const newUser = req.body.name;
  if (newUser != null && newUser != "") {
    db.createUser(newUser);
    res.redirect("/");
  } else {
    res.render("pages/index", { users: users, showForm: true });
  }
}

module.exports = {
  getAllUsers,
  showForm,
  addNewUser,
};
