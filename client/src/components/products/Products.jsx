import { useEffect, useState } from 'react';

import * as productsAPI from '../../api/catalog-api';

import ProductsItem from './products-item/ProductsItem';

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await productsAPI.getAll()

      setProducts(result);
    })();
    // productsAPI.getAll().then(result => setProducts(result));
  }, []);

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-center font-bold text-3xl">All Products</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.length > 0
            ? products.map(product => <ProductsItem key={product._id} {...product} />)
            : <h3 className="font-bold tracking-tight text-2xl">No products found!</h3>
          }
        </div>
      </div>
    </div>
  )
}
