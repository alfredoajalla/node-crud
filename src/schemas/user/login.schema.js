import joi from "joi";

const loginSchema = joi.object({
    email: joi.string().required().email(),
    password: joi.string().required().max(20).min(3)
})

export default loginSchema