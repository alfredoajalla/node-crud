import errorsHelper from "../../helpers/errors.helper.js";
const main = async (user) => {
    try {
        // Contectar
        // dar de alta
        // devolver respuesta
    } catch (error) {
        errorsHelper.internalServerError(error.message, 'CREATE_USER_ERROR')
    }
}

export default main;
