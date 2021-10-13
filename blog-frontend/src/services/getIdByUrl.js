
const getIdByUrl = (href) => {
    const location = href;
    const id = location.split("/")[4];
    return id
}

export default getIdByUrl;