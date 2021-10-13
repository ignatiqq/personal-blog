import { BlogService } from "../../services";

export const authorization = (email, password) => async (dispatch) => {
    const res = await BlogService.authorization(email, password);
    if(res.status === 200) {
        dispatch(setAuth());
        localStorage.setItem("token", res.data.accesToken);
        window.location.href = "http://localhost:3000/"
    } else {
    }
}

export const refresh = () => async (dispatch) => {
    const res = await BlogService.refresh();
    if(res.status === 200) {
        dispatch(setAuth());
        localStorage.setItem("token", res.data.accesToken)
    } else {
        alert(res.data)
    }
}

export const setAuth = () => ({
    type: "SET_AUTH"
})