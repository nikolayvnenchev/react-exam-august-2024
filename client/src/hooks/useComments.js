import { useEffect, useState } from "react";
import commentsAPI from "../api/comments-api"

export function useCreateComment() {
    const createHandler = (productId, comment) => commentsAPI.create(productId, comment);

    return createHandler;
}

export function useGetAllComments(productId) {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        (async () => {
            const result = await commentsAPI.getAll(productId);

            setComments(result);
        })();
    }, [productId]);

    return [comments, setComments];
}

