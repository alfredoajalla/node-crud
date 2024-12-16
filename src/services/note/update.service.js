import errorsHelper from "../../helpers/errors.helper.js";
import getPool from '../../db/getPool.js'

const main = async (note, userId) => {
    try {
        // Contectar
        const pool = await getPool();
        // dar de alta
        const noteInDb = await pool.query('SELECT * FROM notes WHERE id = ?', [note.id]);

        if (noteInDb.length === 0) {
          errorsHelper.notFoundError('Note was not found', 'NOTE_NOT_FOUND')  
        } 
        if (noteInDb[0].userId !== userId ) {
          errorsHelper.notAuthorizedError(`User with ID ${userId} is not authorized to edit this note`)
        }
        const sqlQuery = 'UPDATE notes SET title = ?, text = ?, categoryId = ? WHERE id = ? AND userId = ?';
        const values = [note.title, note.text, note.category, note.id, userId ];
        const [respond] = await pool.query(sqlQuery, values);
        
        if (respond.affectedRows !== 1) {
            errorsHelper.conflictError('Error when updating a note', 'UPDATE_NOTE_ERROR');
        }
        return respond.insertId;
    } catch (error) {
        errorsHelper.internalServerError(error.message, 'UPDATE_NOTE_ERROR')
    }
}

export default main;
