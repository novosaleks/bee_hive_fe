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
            const success = data.updatePost;
            if (success) {
                // TODO add a notification
                console.log('Success! The post has been edited!');
                handleEdit(false);
                updateWall();
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
