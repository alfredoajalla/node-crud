import noteService from '../../services/note/index.js';

const main = async (req, res, next) => {
    try {
        // Validate schema
        const notes = await noteService.getOwnList(req.user.id);
        // send respond
        res.send({ message: 'Notes List', data: notes });

    } catch (error) {
        next(error)
    }
}

export default main
