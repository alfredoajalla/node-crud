import userService from '../../services/user/index.js';
import validateHelper from '../../helpers/validate.helper.js';
import createSchema from '../../schemas/user/login.schema.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        await validateHelper(createSchema, req.body);
        const token = await userService.login(req.body);
        // send respond
        res.send(token);

    } catch (error) {
        next(error)
    }
}

export default main
