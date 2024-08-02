import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetOneProducts } from "../../hooks/useProducts";
import { useForm } from "../../hooks/useForm";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";
import { useContext, useState } from "react";
import { AuthContext } from "../../contexts/AuthContext";
import productsAPI from "../../api/products-api";
import ModalDelete from './ModalDelete'; // Adjust the import path as necessary

const initialValues = {
    comment: ''
};

export default function Details() {
    const navigate = useNavigate();
    const { productId } = useParams();
    const [comments, setComments] = useGetAllComments(productId);
    const createComment = useCreateComment();
    const [product] = useGetOneProducts(productId);
    const { isAuthenticated } = useContext(AuthContext);
    const { userId, email } = useContext(AuthContext);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(productId, comment);
            setComments(oldComments => [...oldComments, { ...newComment, author: { email } }]);
        } catch (err) {
            console.log(`You can not add a comment at tis time!`);
        }
    });

    const isOwner = userId === product._ownerId;

    const productDeleteHandler = async () => {
        try {
            await productsAPI.removeProduct(productId);
            navigate('/products')
        } catch (err) {
            console.log(`You can not delete ${productId} at this time!`);
        }
    }

    const handleDeleteClick = () => {
        setIsModalOpen(true);
    }

    const handleCancel = () => {
        setIsModalOpen(false);
    }

    const handleConfirmDelete = async () => {
        setIsModalOpen(false);
        await productDeleteHandler();
    }

    return (
        <div className="mt-40 mb-20 text-center ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <img src={product.imageUrl} style={{ width: 'auto', height: '400px' }} />
            </div>
            <div className="mt-6">
                <div className=" justify-center gap-0">
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
                    <div className="px-0 py-2">
                        <p className="text-sm font-medium leading-6 text-gray-900">Description</p>
                        <p className="px-60 mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            {product.description}
                        </p>
                    </div>
                </div>

                <div className="mt-6 mb-2">
                    <h2>Comments:</h2>
                    <ul>
                        {comments.map(comment => (
                            <li key={comment._id} className="comment">
                                <p>{comment.author.email}: {comment.text}</p>
                            </li>
                        ))
                        }
                    </ul>
                    {comments.length === 0 && <p className="no-comment">No comments.</p>}
                </div>

                {isOwner && (
                    <div className='justify-center flex gap-x-2'>
                        <Link
                            to={`/products/${productId}/edit`}
                            className="mt-5 flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Edit
                        </Link>

                        <Link
                            to="#"
                            onClick={handleDeleteClick}
                            className="mt-5 flex w-60 justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Delete
                        </Link>
                    </div>
                )}
            </div>

            {isAuthenticated && !isOwner && (
                <div className="mt-10 mb-20 flex justify-center">
                    <div className="flex flex-col items-center">
                        <label htmlFor="comment" className="block text-sm font-medium leading-6 text-gray-900 mb-2">Add new comment:</label>
                        <form className="form flex flex-col items-center" onSubmit={submitHandler}>
                            <textarea
                                id="comment"
                                name="comment"
                                placeholder="Comment......"
                                onChange={changeHandler}
                                value={values.comment}
                                className="px-10 py-10 p-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mb-2"
                            ></textarea>
                            <button className="rounded-md bg-indigo-600 px-20 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500" type="submit">
                                Add Comment
                            </button>
                        </form>
                    </div>
                </div>
            )}

            {isModalOpen && (
                <ModalDelete
                    onCancel={handleCancel}
                    onConfirm={handleConfirmDelete}
                />
            )}
        </div>
    )
}
