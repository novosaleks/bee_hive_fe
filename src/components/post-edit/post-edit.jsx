import { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../graphql/post';

import { useUpdateWall } from '../../common/context/updateWallContext';

import ComponentEdit from '../component-edit/component-edit';

const PostEdit = ({ postId, text, handleEdit }) => {
    const [updatePost, { data }] = useMutation(UPDATE_POST);
    const inputRef = useRef();
    const updateWall = useUpdateWall();

    useEffect(() => {
        if (data) {
            const response = data.updatePost;
            if (response.success) {
                // TODO add a notification
                console.log(response.message);
                handleEdit(false);
                updateWall();
            } else {
                // TODO add a notification
                console.error(response.message);
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
        <ComponentEdit
            handleSubmit={handleSubmit}
            inputRef={inputRef}
            text={text}
            handleClickClose={handleClick}
        />
    );
};

export default PostEdit;
