import { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_POST } from '../../graphql/post';

import { useUpdateWall } from '../../common/context/updateWallContext';

import ComponentEdit from '../component-edit/component-edit';
import { useNotificationService } from '../../common/context/notificationContext';

const PostEdit = ({ postId, text, handleEdit }) => {
    const [updatePost, { data }] = useMutation(UPDATE_POST);
    const inputRef = useRef();
    const updateWall = useUpdateWall();

    const notify = useNotificationService();

    useEffect(() => {
        if (data) {
            const response = data.updatePost;
            if (response.success) {
                notify({text: response.message, type: 'success'})
                handleEdit(false);
                updateWall();
            } else {
                notify({text: response.message, type: 'fail'})
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
