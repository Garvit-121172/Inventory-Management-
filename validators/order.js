const { check } = require("express-validator");
exports.neworderValidator = [
  check("supplierContactNo", "Contat Req")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone Invalid"),
  check("receiverContactNo", "Contat Req")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone Invalid"),
  check("supplierPincode", "Pincode Req")
    .isLength({ min: 6, max: 6 })
    .withMessage("PinCOde Invalid"),
  check("receiverPincode", "Pincode Req")
    .isLength({ min: 6, max: 6 })
    .withMessage("PinCOde Invalid"),
  check("itemLength", "Length Req")
    .isInt({ min: 0 })
    .withMessage("Lenght Invalid"),
  check("itemBreadth", "Pincode Req")
    .isInt({ min: 0 })
    .withMessage("Breadth Invalid"),
  check("itemHeight", "Pincode Req")
    .isInt({ min: 0 })
    .withMessage("Height Invalid"),
  check("itemWeight", "Weight Req")
    .isInt({ min: 0 })
    .withMessage("Weight Invalid"),
];
exports.updateorderValidator = [
  check("supplierContactNo", "Contat Req")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone Invalid"),
  check("receiverContactNo", "Contat Req")
    .isLength({ min: 10, max: 10 })
    .withMessage("Phone Invalid"),
  check("supplierPincode", "Pincode Req")
    .isLength({ min: 6, max: 6 })
    .withMessage("PinCOde Invalid"),
  check("receiverPincode", "Pincode Req")
    .isLength({ min: 6, max: 6 })
    .withMessage("PinCOde Invalid"),
  check("itemLength", "Length Req")
    .isInt({ min: 0 })
    .withMessage("Lenght Invalid"),
  check("itemBreadth", "Pincode Req")
    .isInt({ min: 0 })
    .withMessage("Breadth Invalid"),
  check("itemHeight", "Pincode Req")
    .isInt({ min: 0 })
    .withMessage("Height Invalid"),
  check("itemWeight", "Weight Req")
    .isInt({ min: 0 })
    .withMessage("Weight Invalid"),
];
