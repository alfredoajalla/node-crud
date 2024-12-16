import noteService from '../../services/note/index.js';
import validateHelper from '../../helpers/validate.helper.js';
import schema from '../../schemas/note/create.schema.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        await validateHelper(schema, req.body);
        const userId = req.user.id;
        const note = await noteService.create(req.body, userId);
        // send respond
        res.send({ message: 'Note created successfully!', data: note });

    } catch (error) {
        next(error)
    }
}

export default main
