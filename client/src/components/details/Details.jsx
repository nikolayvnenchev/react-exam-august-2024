import { useEffect, useState } from "react"
import productsAPI from "../../api/products-api"
import { useParams } from "react-router-dom";

export default function Details() {
    const [product, setProduct] = useState({});
    const { productId } = useParams()

    useEffect(() => {
        (async () => {
            const result = await productsAPI.getOneProduct(productId);

            setProduct(result);
        })();
    })
    return (
        <div className="mt-40 text-center">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <img src={product.imageUrl} style={{ width: 'auto', height: '535px' }} />
            </div>
            <div className="mt-6 border-t border-gray-100">
                <div className="divide-y divide-gray-100">
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <p className="text-sm font-medium leading-6 text-gray-900">Name</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.name}</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <p className="text-sm font-medium leading-6 text-gray-900">Brand</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.brand}</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <p className="text-sm font-medium leading-6 text-gray-900">Price</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${product.price}</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <p className="text-sm font-medium leading-6 text-gray-900">Color</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.color}</p>
                    </div>
                    <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                        <p className="text-sm font-medium leading-6 text-gray-900">Description</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {product.description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}