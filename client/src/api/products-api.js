import * as request from './requester';

const BASE_URL = 'http://localhost:3030/data/products';

export const getAll = async () => {
    const result = await request.get(BASE_URL);

    const products = Object.values(result);

    return products;
}

export const getOneProduct = (productId) => request.get(`${BASE_URL}/${productId}`);

export const create = (productData) => request.post(`${BASE_URL}`, productData);

export const removeProduct = (productId) => request.del(`${BASE_URL}/${productId}`);

export const updateProduct = (productId, productData) => request.put(`${BASE_URL}/${productId}`, productData);

const productsAPI = {
    getAll,
    getOneProduct,
    create,
    removeProduct,
    updateProduct,
}

export default productsAPI;