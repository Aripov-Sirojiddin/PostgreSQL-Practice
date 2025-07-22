const { Router } = require("express");
const { getAllUsers, showForm } = require("../controllers/indexController.js");
const indexRouter = Router();

indexRouter.get("/", getAllUsers);
indexRouter.get("/new", showForm);



module.exports = indexRouter;
