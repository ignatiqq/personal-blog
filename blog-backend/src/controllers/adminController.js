import { AdminService } from "../service/index.js";

class adminController {

    async authorization(req, res) {
        try {
            const { email, password } = req.body;
            const user = await AdminService.authorization(email, password);
            res.cookie("refreshToken", user.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(user);
            
        } catch (e) {
            res.status(401).json(e.message)
        }
    }

    async refresh(req, res) {
        try {
            const {refreshToken} = req.cookies;
            const user = await AdminService.refresh(refreshToken);
            res.cookie("refreshToken", user.refreshToken, {maxAge: 30*24*60*60*1000, httpOnly: true});
            return res.json(user);
        } catch (e) {
            res.status(401).json("Пользователь не авторизован");
        }
       
    }

}

export default new adminController();