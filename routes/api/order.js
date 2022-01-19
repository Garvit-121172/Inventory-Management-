const express = require("express");
const router = express.Router();
const {
  getOrders,
  newOrder,
  createOrder,
  updateOrder,
  setOrder,
  deleteOrder,
} = require("./../../controller/order");
const { check, validationResult } = require("express-validator");
const {
  neworderValidator,
  updateorderValidator,
} = require("../../validators/order");

// @desc   Get all orders
router.get("/", getOrders);

// @desc   Get new order
router.get("/new", newOrder);

// @desc   Update an order
router.get("/:orderId/update", updateOrder);

// @desc   Creates new user to db
router.post("/new", neworderValidator, createOrder);

// @desc   Set updation to db
router.put("/update", updateorderValidator, setOrder);

// @desc   Delete and order
router.delete("/:orderId/delete", deleteOrder);

module.exports = router;
