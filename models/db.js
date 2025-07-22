const pool = require("./pool");

async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM usernames;");
  return rows;
}

async function createUser(username) {
  await pool.query("INSERT INTO usernames (username) VALUES  ($1)", [username]);
}

async function getFilteredUsers(filter) {
  const { rows } = await pool.query(
    "SELECT * FROM usernames WHERE username ILIKE $1;",
    [`%${filter}%`]
  );
  return rows;
}

module.exports = {
  getAllUsers,
  createUser,
  getFilteredUsers,
};
