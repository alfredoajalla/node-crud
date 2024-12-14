import errorsHelper from "../../helpers/errors.helper.js";
import getPool from '../../db/getPool.js'

const main = async (user) => {
    try {
        // Contectar
        const pool = await getPool();
        // dar de alta
        const sqlQuery = 'INSERT INTO users (email, password) values (? , ?)';
        const values = [user.email, user.password];
        const [respond] = await pool.query(sqlQuery, values);
        
        if (respond.affectedRows !== 1) {
            errorsHelper.conflictError('Error when inserting user', 'CREATE_USER_ERROR');
        }
        return respond.insertId;
    } catch (error) {
        errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
    }
}

export default main;
