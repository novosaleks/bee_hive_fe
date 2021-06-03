import { useState } from 'react';

import PostAuthorAndData from '../post-author-and-data';
import FooterPostNewReply from '../footer-post-new-reply';
import FooterReplyBlock from '../footer-reply-block';
import DeleteEditComment from '../delete-edit-comment/delete-edit-comment';
import CommentEdit from '../comment-edit';

import { CommentInfoDiv } from './comment-information.style';
import { StyledText } from '../../common/style';

const CommentInformation = ({
    comment,
    auth,
    replies,
    smallBlock,
    componentId,
}) => {
    const [edit, setEdit] = useState(false);

    const handleEdit = edit => {
        return setEdit(edit);
    };
    return (
        <CommentInfoDiv content='flex-start' ml='3px'>
            <DeleteEditComment
                commentId={comment.commentId}
                handleEdit={handleEdit}
                authorId={comment.authorId}
            />
            <PostAuthorAndData
                {...{ smallBlock }}
                name={`${auth.firstName} ${auth.lastName}`}
                date={comment.createdAt}
            />
            {edit ? (
                <CommentEdit
                    commentId={comment.commentId}
                    text={comment.content}
                    handleEdit={handleEdit}
                />
            ) : (
                <>
                    <StyledText className='content'>
                        {comment.content}
                    </StyledText>
                    <FooterPostNewReply
                        firstName={auth.firstName}
                        componentId={componentId}
                        authorId={comment.authorId}
                        addresCommentId={comment.commentId}
                    />
                    <FooterReplyBlock replies={replies} />
                </>
            )}
        </CommentInfoDiv>
    );
};

export default CommentInformation;
