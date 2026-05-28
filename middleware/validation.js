const { body, validationResult } =require("express-validator");

const createTaskValidation = [
  body("title")
    .notEmpty()
    .withMessage("Task title is required")
];

const validationResultHandler = (
  req,
  res,
  next
) => {
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
  validationResultHandler
};