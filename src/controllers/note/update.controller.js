import noteService from '../../services/note/index.js';
import validateHelper from '../../helpers/validate.helper.js';
import schema from '../../schemas/note/update.schema.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        const userId = req.user.id;
        const { noteId } = req.params;
        const note = {...req.body, id: noteId };
        console.log('*********', note)
        await validateHelper(schema, note);
        const updatedNote = await noteService.update(note, userId);
        console.log(updatedNote)
        // send respond
        res.send({ message: 'Note updated successfully!', data: updatedNote });

    } catch (error) {
        next(error)
    }
}

export default main
