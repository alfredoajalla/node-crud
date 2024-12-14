import errorsHelper from "../../helpers/errors.helper.js";
import getPool from '../../db/getPool.js'

const main = async (userId) => {
    try {
        // Contectar
        const pool = await getPool();
        // dar de alta
        const sqlQuery = 'SELECT title FROM notes WHERE userId = ?';
        const values = [userId];
        const [notes] = await pool.query(sqlQuery, values);
        return notes;        
    } catch (error) {
        errorsHelper.internalServerError(error.message, 'GET_NOTES_ERROR')
    }
}

export default main;
