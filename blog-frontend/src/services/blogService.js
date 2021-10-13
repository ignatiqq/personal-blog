import api from "../http";

class BlogService {
    async showAllArticles(page) {
        return api.get(`/article?page=${page}`);
    }

    async create(title, text, avatar) {
        return api.post("/create", {title, text, avatar})
    }

    async showArticleById(articleId) {
        return api.get(`/article/${articleId}`)
    }

    async delete(articleId) {           
       return api.post("/delete", {articleId}) 
    }

    async change(articleId, title, text, avatar) {
        return api.post(`/change/${articleId}`, {title, text, avatar})
    }

    async getInfoBeforeChange(articleId) {
        return api.get(`/change/${articleId}`);
    }

    async authorization(email, password) {
        return api.post("/authorization-by-admin", {email, password});
    }

    async refresh() {
        return api.get("/refresh");
    }
}

export default new BlogService();