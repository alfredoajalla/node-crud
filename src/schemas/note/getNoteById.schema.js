import joi from "joi";

const noteSchema = joi.object({
    noteId: joi.number().required(),
})

export default noteSchema