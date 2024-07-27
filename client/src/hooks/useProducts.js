import { useEffect, useState } from "react";
import productsAPI from "../api/products-api";

export function useGetAllProducts() {
    const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await productsAPI.getAll()

      setProducts(result);
    })();
    // productsAPI.getAll().then(result => setProducts(result));
  }, []);

  return [products, setProducts]
}

export function useGetOneProducts(productId) {
    const [product, setProduct] = useState({});

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getOneProduct(productId);

            setProduct(result);
        })();
    }, [productId]);

    return [
        product,
        setProduct
    ];
}

export function useCreateProduct() {
  const createProductHandler = (productData) => productsAPI.create(productData);

  return createProductHandler;
}