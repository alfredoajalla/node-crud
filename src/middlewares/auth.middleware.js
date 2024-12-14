import jwt from 'jsonwebtoken';
import errorHelper from '../helpers/errors.helper.js'


const main = async (req, res, next ) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            errorHelper.notAuthorizedError('Required Token')
        };
        
        let tokenInfo;
        try {
            tokenInfo = jwt.verify(authorization, process.env.SECRET_KEY)
        } catch (error) {
            errorHelper.notAuthorizedError('Invalid Token')    
        }

        req.user = tokenInfo;
        next();

    } catch (error) {
        next(error);
    }
}

export default main;