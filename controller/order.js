const Order = require("../models/order");
const User = require("../models/user");
const Block = require("../models/block");
const getType = require("../utils/getType");
const { validationResult } = require("express-validator");

async function getBlockNo(pincode, orderId) {
  try {
    let blocks = await Block.find();
    let index = blocks.findIndex((b) => b.pinCode == pincode);
    return index == -1 ? blocks.length : index;
  } catch (err) {
    console.log(err);
  }
}

async function setBlocks(orderCreated, pincode) {
  let foundBlock = await Block.findOneAndUpdate(
    { pinCode: pincode },
    { $push: { orders: orderCreated._id } }
  );
  if (foundBlock == null) {
    let newBlock = new Block({
      pinCode: receiverPincode,
      orders: [orderCreated._id],
    });
    await newBlock.save();
  }
}

// @route  GET api/order/
// @desc   Get all orders
exports.getOrders = async (req, res) => {
  try {
    let orders = await Order.find();
    let users = await User.find();
    let suppliers = [];
    let receivers = [];
    for (let i = 0; i < orders.length; i++) {
      suppliers.push(
        users.filter((user) => user._id.equals(orders[i].orderSupplierId))[0]
      );
      receivers.push(
        users.filter((user) => user._id.equals(orders[i].orderReceiverId))[0]
      );
    }
    res.render("index", {
      orders: orders,
      suppliers: suppliers,
      receivers: receivers,
    });
  } catch (err) {
    console.log(err);
  }
};

// @route  GET api/order/new
// @desc   Get new order
exports.newOrder = async (req, res) => {
  try {
    res.render("neworder");
  } catch (err) {
    console.log(err);
  }
};

// @route  GET api/order/:id/update/
// @desc   Update an order
exports.updateOrder = async (req, res) => {
  try {
    let order = await Order.findById(req.params.orderId);
    let supplier = await User.findById(order.orderSupplierId);
    let receiver = await User.findById(order.orderReceiverId);
    res.render("updateorder", {
      order: order,
      supplier: supplier,
      receiver: receiver,
    });
  } catch (err) {
    console.log(err);
  }
};

// @route  POST api/order/new
// @desc   Creates new user to db
exports.createOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.redirect("/order");
    }
  } catch (err) {
    console.log(err);
  }
  let {
    supplierName,
    supplierFlatNo,
    supplierLocality,
    supplierPincode,
    supplierCity,
    supplierId,
    supplierContactNo,
  } = req.body;
  let {
    receiverName,
    receiverFlatNo,
    receiverLocality,
    receiverPincode,
    receiverCity,
    receiverId,
    receiverContactNo,
  } = req.body;
  let { itemName, itemLength, itemBreadth, itemHeight, itemWeight } = req.body;
  if (
    supplierName == receiverName &&
    supplierFlatNo == receiverFlatNo &&
    supplierLocality == receiverLocality &&
    supplierPincode == receiverPincode
  )
    res.json("You entered same sendr and recever address");
  else {
    let foundSupplier = await User.find({
      userName: supplierName,
      userFlatNo: supplierFlatNo,
      userLocality: supplierLocality,
      userPincode: supplierPincode,
    });
    if (foundSupplier.length == 0) {
      try {
        const user = new User({
          userName: supplierName,
          userFlatNo: supplierFlatNo,
          userLocality: supplierLocality,
          userCity: supplierCity,
          userPincode: parseInt(supplierPincode),
          userContactNo: supplierContactNo,
        });
        var createdSupplier = await user.save();
      } catch (er) {
        console.log(er);
      }
    } else {
      var createdSupplier = foundSupplier[0];
    }
    let foundReceiver = await User.find({
      userName: receiverName,
      userFlatNo: receiverFlatNo,
      userLocality: receiverLocality,
      userPincode: receiverPincode,
    });
    if (foundReceiver.length == 0) {
      try {
        const user = new User({
          userName: receiverName,
          userFlatNo: receiverFlatNo,
          userLocality: receiverLocality,
          userCity: receiverCity,
          userPincode: parseInt(receiverPincode),
          userContactNo: receiverContactNo,
        });
        var createdReceiver = await user.save();
      } catch (err) {
        console.log(err);
      }
    } else {
      var createdReceiver = foundReceiver[0];
    }
  }
  try {
    let blockNo = await getBlockNo(parseInt(receiverPincode));
    let order = new Order({
      orderItem: {
        itemName: itemName,
        itemWeight: itemWeight,
        itemLength: itemLength,
        itemBreadth: itemBreadth,
        itemHeight: itemHeight,
      },
      orderSupplierId: createdSupplier._id,
      orderReceiverId: createdReceiver._id,
      orderToPincode: parseInt(receiverPincode),
      orderFromPincode: parseInt(supplierPincode),
      orderType: getType(itemWeight, itemLength, itemBreadth, itemHeight),
      blockNumber: blockNo,
    });
    var orderCreated = await order.save();
    await setBlocks(orderCreated, receiverPincode);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/order/");
};

// @route  PUT api/order/update
// @desc   Set updation to db
exports.setOrder = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      console.log(errors);
      return res.redirect("/order");
    }
  } catch (err) {
    console.log(err);
  }
  let {
    supplierName,
    supplierFlatNo,
    supplierLocality,
    supplierPincode,
    supplierCity,
    supplierId,
    supplierContactNo,
  } = req.body;
  let {
    receiverName,
    receiverFlatNo,
    receiverLocality,
    receiverPincode,
    receiverCity,
    receiverId,
    receiverContactNo,
  } = req.body;
  let { orderId, itemName, itemLength, itemBreadth, itemHeight, itemWeight } =
    req.body;
  try {
    let updatedSupplier = {
      userName: supplierName,
      userFlatNo: supplierFlatNo,
      userLocality: supplierLocality,
      userCity: supplierCity,
      userPincode: parseInt(supplierPincode),
      userContactNo: supplierContactNo,
    };
    let updatedReceiver = {
      userName: receiverName,
      userFlatNo: receiverFlatNo,
      userLocality: receiverLocality,
      userCity: receiverCity,
      userPincode: parseInt(receiverPincode),
      userContactNo: receiverContactNo,
    };
    let blockNo = await getBlockNo(parseInt(receiverPincode));
    let updatedOrder = {
      orderItem: {
        itemName: itemName,
        itemWeight: itemWeight,
        itemLength: itemLength,
        itemBreadth: itemBreadth,
        itemHeight: itemHeight,
      },
      orderToPincode: parseInt(receiverPincode),
      orderFromPincode: parseInt(supplierPincode),
      orderType: getType(itemWeight, itemLength, itemBreadth, itemHeight),
      blockNumber: blockNo,
    };
    await User.findOneAndUpdate({ _id: supplierId }, updatedSupplier);
    await User.findOneAndUpdate({ _id: receiverId }, updatedReceiver);
    let orderUpdated = await Order.findOneAndUpdate(
      { _id: orderId },
      updatedOrder
    );
    await setBlocks(orderUpdated, receiverPincode);
  } catch (err) {
    console.log(err);
  }
  res.redirect("/order/");
};

// @route   DELETE api/order/:id/delete
// @desc   Delete and order
exports.deleteOrder = async (req, res) => {
  try {
    const deletedItem = await Order.deleteOne({ _id: req.params.orderId });
  } catch (err) {
    res.send("Could not delete ur inventory");
  }
  res.redirect("/order");
};
