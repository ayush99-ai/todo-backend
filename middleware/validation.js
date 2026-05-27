const { body, param, validationResult } = require("express-validator");

// validation while creating task
module.exports.createTaskValidation = [

  body("title")
    .trim()
    .notEmpty()
    .withMessage("Task title is required")
    .isLength({ min: 3 })
    .withMessage("Minimum 3 characters required")

];

// validation while updating
module.exports.updateTaskValidation = [

  body("status")
    .optional()
    .isIn(["pending", "completed"])
    .withMessage("Invalid status value")

];

// validating id
module.exports.idValidation = [

  param("id")
    .isMongoId()
    .withMessage("Invalid task id")

];

// checking errors
module.exports.validate = (req, res, next) => {

  const errors = validationResult(req);

  if (!errors.isEmpty()) {

    return res.status(400).json({
      errors: errors.array()
    });

  }

  next();
};
