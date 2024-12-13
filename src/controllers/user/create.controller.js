import express from 'express';
import validateHelper from '../../helpers/validate.helper.js';
import createSchema from '../../schemas/user/create.schema.js';
import userService from '../../services/user/index.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        await validateHelper(createSchema, req.body)
        await userService.create(req.body);
        // send respond
        res.send('User created successfully!');

    } catch (error) {
        next(error)
    }
}

export default main
