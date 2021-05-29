import { useState, useEffect } from 'react';

import RateBlock from '../../components/rate-block';
import FooterCommentsBlock from '../../components/footer-comments-block';
import { useQuery } from '@apollo/client';
import { GET_COMMENTS_BY_POST_ID } from '../../graphql/comment';

import comments from '../../assets/comments.svg';
import {
    PostFooterMainBlock,
    CommentsPreview,
} from './post-footer-container.style';

const PostFooter = ({ postId }) => {
    const [openCommentsState, setOpenCommentsState] = useState(false);
    //  const [commentsContent, setCommentsContent] = useState([]);
    const handlerClickComments = () => {
        setOpenCommentsState(prevState => !prevState);
    };
    //  const { loading, error, data } = useQuery(GET_COMMENTS_BY_POST_ID, {
    //      variables: { postId: postId },
    //  });

    //  useEffect(() => {
    //      if (data) {
    //          setCommentsContent(data.getCommentsByPostId);
    //      }
    //  }, [data]);
    //  if (loading) return <div>Loading...</div>;
    //  if (error) return <div>{`Error ${error.message}`}</div>;

    //DATA EXAMPLE
    const commentsContent = [
        {
            authorId: '1',
            content: 'hi',
            createdAt: '23.06.20020',
        },
        {
            authorId: '1',
            content: 'hello',
            createdAt: '23.06.20020',
        },
        {
            authorId: '1',
            content: 'hello, world',
            createdAt: '23.06.20020',
        },
    ];

    return (
        <>
            <PostFooterMainBlock>
                <RateBlock />
                <img
                    src={comments}
                    alt='add comment icon'
                    className='comments'
                />
            </PostFooterMainBlock>

            <CommentsPreview onClick={handlerClickComments}>
                {!openCommentsState
                    ? `View all ${commentsContent.length} comments`
                    : `Hide comments`}
            </CommentsPreview>
            {openCommentsState && (
                <FooterCommentsBlock comments={commentsContent} />
            )}
        </>
    );
};

export default PostFooter;
