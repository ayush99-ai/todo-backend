const { body, param, validationResult } = require("express-validator");

// check task input
const createTaskValidation = [
  body("title").notEmpty().withMessage("Please enter task title")
];

// check id
const idValidation = [
  param("id").isMongoId().withMessage("Invalid id")
];

// show errors
const validationResultHandler = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      message: errors.array()[0].msg
    });
  }

  next();
};

module.exports = {
  createTaskValidation,
  idValidation,
  validationResultHandler
};