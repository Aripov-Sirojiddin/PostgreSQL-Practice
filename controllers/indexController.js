const db = require("../models/db.js");

async function getAllUsers(req, res) {
  const { search } = req.query;
  const users =
    search != null ? await db.getFilteredUsers(search) : await db.getAllUsers();
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

async function deleteUser(req, res) {
  const { userId } = req.params;
  console.log(userId);
  await db.deleteUser(userId);
  res.redirect("/");
}

module.exports = {
  getAllUsers,
  showForm,
  addNewUser,
  deleteUser,
};
