const Joi = require("joi");

exports.user = Joi.object()
  .keys({
    id: Joi.number()
      .integer()
      .required(),
    name: Joi.string()
      .min(3)
      .max(40)
      .required(),
    email: Joi.string()
    .max(40)
    .required(),
  });
