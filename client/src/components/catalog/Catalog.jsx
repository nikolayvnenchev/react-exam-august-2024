import { useEffect, useState } from 'react';

import * as productsAPI from '../../api/catalog-api';

import CatalogItem from './catalog-item/CatalogItem';

// const products = [
//     {
//       id: 1,
//       name: 'Basic Tee',
//       href: '#',
//       imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
//       imageAlt: "Front of men's Basic Tee in black.",
//       price: '$35',
//       color: 'Black',
//     },
//     {
//         id: 2,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://storage.needpix.com/rsynced_images/basketball-933173_1280.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$65',
//         color: 'Orange',
//     },
//     {
//         id: 3,
//         name: 'Basic Tee',
//         href: '#',
//         imageSrc: 'https://as2.ftcdn.net/v2/jpg/08/50/64/53/1000_F_850645327_9nmgpvc3Z1YFrl9l720NSf4FmfjKszjs.jpg',
//         imageAlt: "Front of men's Basic Tee in black.",
//         price: '$135',
//         color: 'Orange/Light Blue',
//     },
//   ]
  
  export default function Catalog() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
      productsAPI.getAll()
        .then(result => setProducts(result));
    }, []);

    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-center font-bold tracking-tight text-gray-900">All Products</h2>
  
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.length > 0
              ? products.map(product => <CatalogItem key={product._id} {...product} />)
              : <h3>No products found!</h3>
            }
          
          </div>
        </div>
      </div>
    )
  }
  