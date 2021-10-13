export const getArticleByIdErorr = (error) => ({
    type: "SET_ERROR",
    payload: error
})

export const setErrorClear = () => ({
    type: "SET_ERROR_CLEAR",
    payload: {}
}) 