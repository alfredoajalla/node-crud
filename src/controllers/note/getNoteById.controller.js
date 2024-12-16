import noteService from '../../services/note/index.js';
import validateHelper from '../../helpers/validate.helper.js';
import schema from '../../schemas/note/getNoteById.schema.js';
import errorsHelper from '../../helpers/errors.helper.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        const { noteId } = req.params;
        await validateHelper(schema, req.params);
        const note = await noteService.getNoteById(noteId);
        const userId = req.user.id;
        if (note.userId !== userId) {
            errorsHelper.notAuthorizedError(`Wrong permissions for user with ID ${userId}`)
        }
        // send respond
        res.send({ message: 'Note data', data: note });

    } catch (error) {
        next(error)
    }
}

export default main
