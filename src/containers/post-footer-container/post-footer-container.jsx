import { useState } from 'react';

import FooterPostNewComment from '../../components/footer-post-new-comment';
import RateBlock from '../../components/rate-block';
import FooterCommentsBlock from '../../components/footer-comments-block';
import { NewCommentProvider } from '../../common/context/newCommentContext';

import comments from '../../assets/comments.svg';

import {
    PostFooterMainBlock,
    CommentsPreview,
} from './post-footer-container.style';

const PostFooter = ({ componentId, photoModal, post }) => {
    const [openCommentsState, setOpenCommentsState] = useState(false);
    const [openNewCommentState, setOpenNewCommentState] = useState(false);
    const handlerClickComments = () => {
        setOpenCommentsState(prevState => !prevState);
    };
    const handlerClickNewComment = () => {
        setOpenNewCommentState(prevState => !prevState);
    };

    const updateComments = () => {
        //  refetch();
    };

    //DATA EXAMPLE
    const commentsContent = [
        {
            authorId: '1',
            commentId: '11',
            content: 'hi',
            createdAt: '23.06.20020',
            reply: false,
            addresseeId: '',
            replyContent: '',
        },
        {
            authorId: '2',
            commentId: '12',
            content: 'hello',
            createdAt: '23.06.20020',
            reply: false,
            addresseeId: '',
            replyContent: '',
        },
        {
            authorId: '1',
            commentId: '13',
            content: 'hello, world',
            createdAt: '23.06.20020',
            reply: false,
            addresseeId: '',
            replyContent: '',
        },
        {
            authorId: '2',
            commentId: '14',
            content: 'i do not agree',
            createdAt: '23.06.20020',
            reply: true,
            addresCommentId: '13',
            addresseeId: '1',
        },
    ];

    return (
        <NewCommentProvider value={updateComments}>
            <PostFooterMainBlock>
                <RateBlock
                    photoModal={photoModal}
                    postId={componentId}
                    post={post}
                />

                {/* open/hide textarea for adding a comment */}
                <img
                    src={comments}
                    alt='add comment icon'
                    className='comments'
                    onClick={handlerClickNewComment}
                />
            </PostFooterMainBlock>

            {/* add new comment */}
            {openNewCommentState && (
                <FooterPostNewComment
                    setOpenNewCommentState={setOpenNewCommentState}
                    componentId={componentId}
                    reply={false}
                />
            )}

            {/* hide/open comments */}
            <CommentsPreview onClick={handlerClickComments}>
                {!openCommentsState
                    ? `View all ${commentsContent.length} comments`
                    : `Hide comments`}
            </CommentsPreview>

            {/* post`s comments */}
            {openCommentsState && (
                <FooterCommentsBlock
                    comments={commentsContent}
                    componentId={componentId}
                    photoModal={photoModal}
                />
            )}
        </NewCommentProvider>
    );
};

export default PostFooter;
