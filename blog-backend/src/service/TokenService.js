import jwt from "jsonwebtoken";

import { tokenModel } from "../models/index.js";

class TokenService {

    async generateTokens(payload) {
        const accesToken =  jwt.sign(payload, process.env.JWT_ACCES_SECRET, {expiresIn: "30m"});
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET, {expiresIn: "7d"});
        return {
            accesToken,
            refreshToken
        }
    }

    async saveToken(userId, refreshToken) {
        const tokenData = await tokenModel.findOne({user: userId});

        if(tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }

        const token = await tokenModel({user: userId, refreshToken: refreshToken});
        token.save();
        return token;
    }

    validateRefreshToken(refreshToken)  {
        const userData = jwt.verify(refreshToken, process.env.JWT_REFRESH_SECRET);
        return userData;
    }

    validateAccesToken(accesToken) {
        const userData = jwt.verify(accesToken, process.env.JWT_ACCES_SECRET);
        return userData;
    }

}

export default new TokenService();