import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS_BY_POST_ID } from '../../graphql/comment';

import FooterPostNewComment from '../../components/footer-post-new-comment';
import RateBlock from '../../components/rate-block';
import FooterCommentsBlock from '../../components/footer-comments-block';
import { NewCommentProvider } from '../../common/context/newCommentContext';

import comments from '../../assets/comments.svg';

import {
    PostFooterMainBlock,
    CommentsPreview,
} from './post-footer-container.style';

const PostFooter = ({ postId }) => {
    const [openCommentsState, setOpenCommentsState] = useState(false);
    const [openNewCommentState, setOpenNewCommentState] = useState(false);
    //  const [commentsContent, setCommentsContent] = useState([]);
    const handlerClickComments = () => {
        setOpenCommentsState(prevState => !prevState);
    };
    const handlerClickNewComment = () => {
        setOpenNewCommentState(prevState => !prevState);
    };
    //  const { loading, error, data, refetch } = useQuery(GET_COMMENTS_BY_POST_ID, {
    //      variables: { postId: postId },
    //  });

    //  useEffect(() => {
    //      if (data) {
    //          setCommentsContent(data.getCommentsByPostId);
    //      }
    //  }, [data]);

    const updateComments = () => {
        //  refetch();
    };

    //  if (loading) return <div>Loading...</div>;
    //  if (error) return <div>{`Error ${error.message}`}</div>;

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
            authorId: '1',
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
                <RateBlock />
                <img
                    src={comments}
                    alt='add comment icon'
                    className='comments'
                    onClick={handlerClickNewComment}
                />
            </PostFooterMainBlock>
            {openNewCommentState && (
                <FooterPostNewComment
                    setOpenNewCommentState={setOpenNewCommentState}
                    reply={false}
                />
            )}
            <CommentsPreview onClick={handlerClickComments}>
                {!openCommentsState
                    ? `View all ${commentsContent.length} comments`
                    : `Hide comments`}
            </CommentsPreview>
            {openCommentsState && (
                <FooterCommentsBlock comments={commentsContent} />
            )}
        </NewCommentProvider>
    );
};

export default PostFooter;
