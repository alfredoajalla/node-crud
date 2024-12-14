import express from 'express';
import bcrypt from 'bcrypt';
import validateHelper from '../../helpers/validate.helper.js';
import createSchema from '../../schemas/user/create.schema.js';
import userService from '../../services/user/index.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        await validateHelper(createSchema, req.body)
        req.body.password = await bcrypt.hash(req.body.password, 5);
        await userService.create(req.body);
        // send respond
        res.send('User created successfully!');

    } catch (error) {
        next(error)
    }
}

export default main
