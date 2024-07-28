import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetOneProducts } from "../../hooks/useProducts";

export default function Details() {
    const { productId } = useParams()
    const [product, setProduct] = useGetOneProducts(productId);

    return (
        <div className="mt-20 text-center">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <img src={product.imageUrl} style={{ width: 'auto', height: '535px' }} />
            </div>
            <div className="mt-6">
                <div className="">
                    <div className="px-4 py-2">
                        <p className="text-sm font-medium leading-0 text-gray-900">Name</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.name}</p>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-sm font-medium leading-6 text-gray-900">Brand</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.brand}</p>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-sm font-medium leading-6 text-gray-900">Price</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">${product.price}</p>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-sm font-medium leading-6 text-gray-900">Color</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{product.color}</p>
                    </div>
                    <div className="px-4 py-2">
                        <p className="text-sm font-medium leading-6 text-gray-900">Description</p>
                        <p className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {product.description}
                        </p>
                    </div>
                </div>
                <div className='justify-center flex gap-x-2'>
                    <Link
                        to={`/products`}
                        className="mt-5 flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Edit
                    </Link>

                    <Link
                        to={`/`}
                        className="mt-5 flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Delete
                    </Link>
                </div>
            </div>
        </div>
    )
}