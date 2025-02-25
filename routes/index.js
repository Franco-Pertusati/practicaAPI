const express = require("express");

const productsRouter = require("./productsRouter.js");
const userRouter = require("./userRouter.js");
const categories = require("./categoriesRouter.js");
const usersRouter = require("./userRouter.js");

function routerApi(app) {
  const router = express.Router();
  app.use("/api/v1", router);
  router.use("/products", productsRouter);
  router.use("/users", userRouter);
  router.use("/categories", categories);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
