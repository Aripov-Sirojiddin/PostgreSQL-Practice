const { Router } = require("express");
const {
  getAllUsers,
  showForm,
  addNewUser,
} = require("../controllers/indexController.js");
const indexRouter = Router();

indexRouter.get("/", getAllUsers);
indexRouter.get("/new", showForm);
indexRouter.post("/new", addNewUser);

module.exports = indexRouter;
