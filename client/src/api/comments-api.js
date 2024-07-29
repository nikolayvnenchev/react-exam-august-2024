import requester from "./requester";

const BASE_URL = 'http://localhost:3030/data/comments';

const create = (productId, text) => requester.post(BASE_URL, { productId, text });

const getAll = (productId) =>{
    const params = new URLSearchParams({
        where:  `productId="${productId}"`,
        load:  `author=_ownerId:users`,
    });

    return requester.get(`${BASE_URL}?${params.toString()}`);
}

const commentsAPI = {
    create,
    getAll
}

export default commentsAPI;