const Joi = require("joi")
// VALIDATION
function userSchema(data) {

    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(50)
            .required(),
        id: Joi.number()
            .integer()
            .min(1)
            .max(20),
        password: Joi.string()
            .min(8)
            .max(20)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        address: Joi.string()
            .min(3)
            .max(40)


    })

    const valid = schema.validate(data)
    return valid;
}



function profileSchema(data) {
    const schema = Joi.object({
        username: Joi.string()
            .min(3)
            .max(50)
            .required(),
        id: Joi.number()
            .integer()
            .min(1)
            .max(20),
        password: Joi.string()
            .min(8)
            .max(20)
            .required(),
        email: Joi.string()
            .required()
            .email(),
        address: Joi.string()
            .min(3)
            .max(40)


    })

    const valid = schema.validate(data)
    return valid;

}



module.exports.userSchema = userSchema;
module.exports.profileSchema = profileSchema;