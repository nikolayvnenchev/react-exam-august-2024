import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useGetOneProducts } from "../../hooks/useProducts";
import productsAPI from "../../api/products-api";

const initialValues = {
    name: '',
    brand: '',
    price: '',
    imageUrl: '',
    color: '',
    description: '',
}

export default function EditProduct() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [product, setProduct] = useGetOneProducts(productId);

    const {
        values,
        changeHandler,
        submitHandler,
    } = useForm(Object.assign(initialValues, product), async (values) => {
        const updatedProduct = await productsAPI.updateProduct(productId, values);

        navigate(`/products/${productId}/details`);
    });


    return (
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Edit Product Form</h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                <form method="POST" onSubmit={submitHandler} className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                            Product name
                        </label>
                        <div className="mt-2">
                            <input
                                id="name"
                                name="name"
                                type="text"
                                value={values.name}
                                onChange={changeHandler}
                                required
                                autoComplete="name"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="brand" className="block text-sm font-medium leading-6 text-gray-900">
                            Brand
                        </label>
                        <div className="mt-2">
                            <input
                                id="brand"
                                name="brand"
                                type="text"
                                value={values.brand}
                                onChange={changeHandler}
                                required
                                autoComplete="brand"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="price" className="block text-sm font-medium leading-6 text-gray-900">
                            Price
                        </label>
                        <div className="mt-2">
                            <input
                                id="price"
                                name="price"
                                type="text"
                                value={values.price}
                                onChange={changeHandler}
                                required
                                autoComplete="price"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="imageUrl" className="block text-sm font-medium leading-6 text-gray-900">
                            Image
                        </label>
                        <div className="mt-2">
                            <input
                                id="imageUrl"
                                name="imageUrl"
                                type="text"
                                value={values.imageUrl}
                                onChange={changeHandler}
                                required
                                autoComplete="imageUrl"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="color" className="block text-sm font-medium leading-6 text-gray-900">
                            Color
                        </label>
                        <div className="mt-2">
                            <input
                                id="color"
                                name="color"
                                type="text"
                                value={values.color}
                                onChange={changeHandler}
                                required
                                autoComplete="color"
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Description
                        </label>
                        <div className="mt-2">
                            <textarea
                                id="description"
                                name="description"
                                value={values.description}
                                onChange={changeHandler}
                                required
                                rows={3}
                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                            />
                        </div>
                        <p className="mt-3 text-sm leading-6 text-gray-600">Write few words about your product.</p>
                    </div>

                    <div className="mt-6 flex items-center justify-center gap-x-6">
                        <button
                            type="submit"
                            className="flex justify-center rounded-md bg-indigo-600 px-40 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Confirm Edit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
