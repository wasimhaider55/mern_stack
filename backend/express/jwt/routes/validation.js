const Joi = require("joi");


// for registeration
function regValidation(data) {
    const schema = Joi.object({
        name: Joi
            .string()
            .required()
            .min(3)
            .max(100),
        email: Joi
            .string()
            .required()
            .email(),
        password: Joi
            .string()
            .min(8)
            .max(100)
            .required(),
        address: Joi
            .string()
            .min(5)
            .max(400)
    });
    const valid = schema.validate(data)
    return valid;
}


// for login 
function loginValidation(data) {
    const schema = Joi.object({
        email: Joi
            .string()
            .required()
            .email(),
        passowrd: Joi
            .string()
            .required,
    });
    const valid = schema.validate(data)
    return valid;
}

module.exports.loginValidation = loginValidation;
module.exports.regValidation = regValidation;