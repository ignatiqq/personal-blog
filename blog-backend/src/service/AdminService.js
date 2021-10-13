import bcrypt from "bcrypt";

import { adminModel, tokenModel } from "../models/index.js";
import { userDto } from "../dtos/index.js";
import { TokenService } from "./index.js";



class AdminService {

    async authorization(email, password) {
        if(!email || !password) {
            throw new Error("Проверьте правильность введенных данных");
        }
        const user = await adminModel.findOne({email});

        if(!user) {
            throw new Error("Такого пользователя не существует");
        }

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword) {
            throw new Error("Неправильно введен пароль");
        }

        const modifiedUser = new userDto(user);

        const tokens = await TokenService.generateTokens({...modifiedUser});
        await TokenService.saveToken(modifiedUser.id, tokens.refreshToken);

        return {
            message: "Вы успешно авторизированы",
            ...tokens,
            user: modifiedUser
        }
    }

    async refresh(refreshToken) {
        if(!refreshToken) {
            throw new Error("Пользователь не авторизован");
        }

        const tokenData = await tokenModel.findOne({refreshToken});
        const userInfo = TokenService.validateRefreshToken(refreshToken);

        if(!tokenData || !userInfo) {
            throw new Error("Пользователь не авторизован");
        }

        const user = await adminModel.findById(userInfo.id);
        const modifiedUser = new userDto(user);

        const tokens = await TokenService.generateTokens({...modifiedUser});
        await TokenService.saveToken(modifiedUser.id, tokens.refreshToken);

        return {
            ...tokens,
            user: modifiedUser
        }

    }

}

export default new AdminService();