const Joi = require("joi");
const { ENUM } = require("../configs/constants.configs");

const createSchema = Joi.object({
    name: Joi.string().required().min(3).max(100).trim(),
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(8).max(60),
    googleId: Joi.string().forbidden(),
    role: Joi.string().valid(ENUM.USER, ENUM.ADMIN).default(ENUM.USER).trim().lowercase().optional()
});

const loginSchema = Joi.object({
    email: Joi.string().email().required().lowercase().trim(),
    password: Joi.string().required().min(6).max(50),
});

module.exports = {
    createSchema,
    loginSchema
};