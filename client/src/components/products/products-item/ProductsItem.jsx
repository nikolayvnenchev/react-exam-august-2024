import { Link } from 'react-router-dom';

export default function ProductsItem({
    _id,
    name,
    price,
    brand,
    imageUrl,
}) {
    return (
        <div className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt="image"
                    src={imageUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-gray-700">
                        <Link to={`/products/${_id}/details`}>
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </Link>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Brand: {brand}</p>
                </div>
                <p className="text-sm font-medium text-gray-900">Price: ${price}</p>
            </div>
            <div className='lg:flex lg:gap-x-12'>
                <Link
                    to={`/products/${_id}/details`}
                    className="mt-5 flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                    Details
                </Link>
            </div>
        </div>
    );
}