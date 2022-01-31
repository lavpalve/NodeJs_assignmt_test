const joi = require('joi');

const userProfileValidateSchema = joi.object({
    username: joi.string().min(6).max(8).required(),
    password: joi.string().min(8).max(20).required(),
    email: joi.string().email().required(),
    phone: joi.number().optional()
}).options({abortEarly: false});

module.exports = userProfileValidateSchema;