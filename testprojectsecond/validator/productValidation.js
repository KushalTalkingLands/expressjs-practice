const Joi = require("joi");

exports.product = Joi.object()
  .keys({
    id: Joi.number()
      .integer()
      .required(),
    brand: Joi.string()
      .min(3)
      .max(40)
      .required(),
    model: Joi.string()
    .max(40)
    .required(),
});