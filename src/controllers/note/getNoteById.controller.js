import noteService from '../../services/note/index.js';
import validateHelper from '../../helpers/validate.helper.js';
import schema from '../../schemas/note/getNoteById.schema.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        const { noteId } = req.params;
        const note = await noteService.getNoteById(noteId);
        // send respond
        res.send({ message: 'Note data', data: note });

    } catch (error) {
        next(error)
    }
}

export default main
