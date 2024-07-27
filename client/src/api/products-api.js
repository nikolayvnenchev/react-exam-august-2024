import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/products';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

export const getOneProduct = (productId) => request.get(`${BASE_URL}/${productId}`);

export const create = (productData) => request.post(`${BASE_URL}`, productData);

const productsAPI = {
    getAll,
    getOneProduct,
    create,
}

export default productsAPI;