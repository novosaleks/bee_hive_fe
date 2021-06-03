import { useEffect, useRef } from 'react';
import { useMutation } from '@apollo/client';
import { UPDATE_COMMENT } from '../../graphql/comment';
import { useNewComment } from '../../common/context/newCommentContext';

import ComponentEdit from '../component-edit/component-edit';

const CommentEdit = ({ commentId, text, handleEdit }) => {
    const [updateComment, { data }] = useMutation(UPDATE_COMMENT);
    const inputRef = useRef();
    const updateComments = useNewComment();

    useEffect(() => {
        if (data) {
            const success = data.updateComment;
            if (success) {
                // TODO add a notification
                console.log('Success! The comment has been edited!');
                handleEdit(false);
                updateComments();
            }
        }
    }, [data]);

    const handleSubmit = async e => {
        e.preventDefault();
        await updateComment({
            variables: { commentId: commentId, text: inputRef.current.value },
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

export default CommentEdit;
