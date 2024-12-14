import errorsHelper from "../../helpers/errors.helper.js";
import getPool from '../../db/getPool.js'

const main = async (noteId) => {
    try {
        // Contectar
        const pool = await getPool();
        // dar de alta
        const sqlQuery = 'SELECT * FROM notes WHERE id = ?';
        const values = [noteId];
        const [notes] = await pool.query(sqlQuery, values);

        if (notes.length !== 1) {
            errorsHelper.notFoundError('Note not found', 'SEARCH_NOTE_ERROR');
        }
        return notes[0];
    } catch (error) {
        errorsHelper.internalServerError(error.message, 'GET_NOTES_ERROR')
    }
}

export default main;
