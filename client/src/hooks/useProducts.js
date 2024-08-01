import { useEffect, useState } from "react";
import productsAPI from "../api/products-api";
import { useNavigate } from "react-router-dom";

export function useGetAllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();


  useEffect(() => {
    (async () => {
      try {
        const result = await productsAPI.getAll()

        setProducts(result);
      } catch (err) {
        navigate('/not-found')
      }
    })();
    // productsAPI.getAll().then(result => setProducts(result));
  }, []);

  return [products, setProducts]
}

export function useGetOneProducts(productId) {
  const [product, setProduct] = useState({
    name: '',
    brand: '',
    price: '',
    imageUrl: '',
    color: '',
    description: '',
  });

  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        const result = await productsAPI.getOneProduct(productId);

        setProduct(result);
      } catch (err) {
        navigate('/not-found')
      }
    })();
  }, [productId, navigate]);

  return [
    product,
    setProduct
  ];
}

export function useCreateProduct() {
  const createProductHandler = (productData) => productsAPI.create(productData);

  return createProductHandler;
}