const db = require("../models/db.js");

async function getAllUsers(req, res) {
  const users = await db.getAllUsers();
  res.render("pages/index", { users: users, showForm: false });
}

async function showForm(req, res) {
  const users = await db.getAllUsers();
  res.render("pages/index", { users: users, showForm: true });
}

module.exports = {
  getAllUsers,
  showForm,
};
