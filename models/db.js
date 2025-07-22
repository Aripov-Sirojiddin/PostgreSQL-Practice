const pool = require("./pool");

async function getAllUsers() {
  const { rows } = await pool.query("SELECT * FROM usernames;");
  return rows;
}

async function createUser(username) {
  await pool.query("INSERT INTO usernames (username) VALUES  ($1)", [username]);
}

module.exports = {
  getAllUsers,
  createUser,
};
