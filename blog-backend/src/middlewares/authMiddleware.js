import { TokenService } from "../service/index.js";

const authMiddleware = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;

        if(!authHeader) {
            throw new Error("Пользователь не авторизован");
        }

        const accesToken = authHeader.split(" ")[1];

        const userData = TokenService.validateAccesToken(accesToken);

        if(!userData) {
            throw new Error("Пользователь не авторизован");
        }

        req.user = userData;
        next();

    } catch (e) {
        res.status(401).json(e.message);
    }
    
}

export default authMiddleware;