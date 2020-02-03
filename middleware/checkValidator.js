const { check, validationResult } = require('express-validator');

exports.validationRule = () => [
  check('email', 'this field is required').notEmpty(),
  check('password', 'this field is required').notEmpty(),
  check('password', 'min length is 6 char').isLength({ min: 6 })
];
exports.validationRegisterRule = () => [
  check('name', 'Name is required').notEmpty(),
  check('email', 'the e-mail is required').isEmail(),
  check('password', 'please enter a min 6 characters').isLength({ min: 6 })
];
exports.validate = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ msg: errors.array() });
  return next();
};
