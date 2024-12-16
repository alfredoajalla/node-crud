import errorsHelper from "../../helpers/errors.helper.js";
import getPool from '../../db/getPool.js'

const main = async (note, userId) => {
    try {
        // Contectar
        const pool = await getPool();
        // dar de alta
        const sqlQuery = 'INSERT INTO notes (title, text, userId, categoryId) values (? , ?, ?, ?)';
        const values = [note.title, note.text, userId, note.category];
        const [respond] = await pool.query(sqlQuery, values);
        
        if (respond.affectedRows !== 1) {
            errorsHelper.conflictError('Error when creating a note', 'CREATE_NOTE_ERROR');
        }
        return respond.insertId;
    } catch (error) {
        errorsHelper.internalServerError(error.message, 'CREATE_NOTE_ERROR')
    }
}

export default main;
