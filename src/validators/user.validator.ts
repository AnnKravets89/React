import * as Joi from "joi";

export const userValidator = Joi.object({
    username: Joi.string().pattern(/w{4,}/).required().messages({
        'string.pattern.base': 'Only chars allowed.',
    }),

    password: Joi.string().min(3).max(6).required().messages({
        'string.min': 'Password must be at least 3 characters.',
        'string.max': 'Password cannot be  6 characters.',
    }),

    age: Joi.number().min(1).max(117).required().messages({
        'number.min': 'min age is 1',
        'number.max': 'max age is 117'
    })
})
