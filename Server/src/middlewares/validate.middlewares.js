const Joi = require("joi");

// Function created using currying method
function validate(schema) {
    return function(req, res, next) {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false
        });
        if (error) {
            let errorMessage = [];
            error.details.forEach(detail => {
                errorMessage.push(detail.message);
            });
            return res.status(403)
                .send({
                    message: errorMessage,
                    success: false
                });
        }
        // Re-assign req.body to the validated sanitized value
        req.body = value;
        next();
    }
}

module.exports = validate;