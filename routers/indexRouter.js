const { Router } = require("express");
const {
  getAllUsers,
  showForm,
  addNewUser,
  deleteUser,
} = require("../controllers/indexController.js");
const indexRouter = Router();

indexRouter.get("/", getAllUsers);
indexRouter.get("/new", showForm);
indexRouter.post("/new", addNewUser);
indexRouter.delete("/user/:userId", deleteUser);

module.exports = indexRouter;
