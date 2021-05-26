import React, { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../graphql/post';

const PostEdit = ({ postId, text, handleEdit }) => {
    const [updatePost, { data }] = useMutation(UPDATE_POST);
    const inputRef = useRef();

    useEffect(() => {
        if (data) {
            const success = data.updatePost;
            if (success) {
                handleEdit(false);
                // TODO after update reload the component, not the page
                window.location.reload();
            }
        }
    }, [data]);

    const handleSubmit = async e => {
        e.preventDefault();
        await updatePost({
            variables: { postId: postId, text: inputRef.current.value },
        });
    };

    const handleClick = () => {
        handleEdit(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input ref={inputRef} defaultValue={text} />
            </form>
            <button onClick={handleClick}>X</button>
        </>
    );
};

export default PostEdit;
