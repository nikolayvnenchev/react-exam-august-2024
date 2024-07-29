import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useGetOneProducts } from "../../hooks/useProducts";
import { useForm } from "../../hooks/useForm";
import { useGetAllComments, useCreateComment } from "../../hooks/useComments";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthContext";

const initialValues = {
    comment: ''
};

export default function Details() {
    const { productId } = useParams();
    const [comments, setComments] = useGetAllComments(productId);
    const createComment = useCreateComment();
    const [product] = useGetOneProducts(productId);
    const { isAuthenticated } = useContext(AuthContext);
    const { userId, email } = useContext(AuthContext);

    const {
        changeHandler,
        submitHandler,
        values,
    } = useForm(initialValues, async ({ comment }) => {
        try {
            const newComment = await createComment(productId, comment);

            setComments(oldComments => [...oldComments, {...newComment, author: { email }}]);
        } catch (err) {
            console.log(err.message);
        }
    });

    const isOwner = userId === product._ownerId;
    
    return (
        <div className="mt-40 mb-20 text-center ">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
                <img src={product.imageUrl} style={{ width: 'auto', height: '400px' }} />
            </div>
            <div className="mt-6">
                <div className="flex justify-center">
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
                )}

            </div>
            {isAuthenticated && !isOwner && (
                <div className="mt-10 mb-20 border">
                    <label>Add new comment:</label>
                    <form className="form" onSubmit={submitHandler}>
                        <textarea
                            name="comment"
                            placeholder="Comment......"
                            onChange={changeHandler}
                            value={values.comment}
                        ></textarea>
                        <input className="btn submit" type="submit" value="Add Comment" />
                    </form>
                </div>
            )}
        </div>
    )
}