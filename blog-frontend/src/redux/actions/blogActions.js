import { BlogService } from "../../services";
import { getArticleByIdErorr } from "./errorActions.js";

export const getAllArticles = (page) => async (dispatch) => {
        const res = await BlogService.showAllArticles(page);
        dispatch(setAllArticles(res.data))
}

export const setAllArticles = (articles) => ({
    type: "SET_ALL_ARTICLES",
    payload: articles
})

export const getArticleById = (articleId) => async (dispatch) => {
    try {
        const res = await BlogService.showArticleById(articleId);
        dispatch(setArticleById(res.data))
    } catch (e) { 
        dispatch(getArticleByIdErorr(e.message))
    }
}

export const getInfoBeforeChange = (articleId) => async (dispatch) => {
    const res = await BlogService.getInfoBeforeChange(articleId);
    dispatch(setArticleById(res.data))
}

export const setArticleById = (article) => ({
    type: "SET_ARTICLE_BY_ID",
    payload: article
})

export const clearArticleById = () => ({
    type: "CLEAR_ARTICLE_BY_ID",
    payload: {}
})

export const change = (articleId, title, text, avatar) => async (dispatch) => {
    const res = await BlogService.change(articleId, title, text, avatar);
    if(res.status === 200) {
        alert("Статья успешно изменена")
        dispatch(changeArticle({articleId, title, text, avatar}))
    } else {
        alert("Чтото прошло не так")
    }
}

export const changeArticle = (data) => ({
    type: "SET_ARTICLE_AFTER_CHANGE",
    payload: data
})

export const deleteArticle = (articleId) => async (dispatch) => {
    const res = await BlogService.delete(articleId);
    if(res.status === 200) {
        alert("Статья успешно удалена")
        dispatch(deleteArtcileFront(articleId))
    } else {
        alert("Упс чтото пошло не так")
    }
}

export const deleteArtcileFront = (articleId) => ({
    type: "DELETE_ARTICLE",
    payload: articleId
})

export const createArticle = (title, text, avatar) => async (dispatch) => {
    const res = await BlogService.create(title, text, avatar);
    if(res.status === 200) {
        alert("Статья успешно создана")
        dispatch(createArticleFront(res.data))
    } else {
        alert("Упс чтото пошло нетак")
    }
}

export const createArticleFront = (articleData) => ({
    type: "CREATE_ARTICLE",
    payload: articleData
})

export const nextPage = (math) => ({
    type: "PAGINATION",
    payload: math
})
