import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';

import UserAvatar from '../user-avatar';
import CommentInformation from '../comment-information';

import { CommentBlock } from './footer-comment.style';

const FooterComment = ({
    comment,
    allReplies,
    replyBlock,
    componentId,
    photoModal,
}) => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    //find the name of the auth
    const users = data.getAllUsers;
    const auth = users && users.find(user => user.id === comment.authorId);

    //find all replies to the comment
    const replies =
        allReplies &&
        allReplies.filter(reply => reply.addresCommentId === comment.commentId);

    //prop for UserAvatar css
    const smallBlock = true;

    return (
        <CommentBlock
            replyBlock={replyBlock}
            photoModal={photoModal}
            className='comment-block'>
            <UserAvatar
                rating={'#C53B0E'}
                rateScore={'1,5'}
                width={smallBlock ? 70 : [70, 135]}
                height={smallBlock ? 70 : [70, 135]}
                {...{ smallBlock }}
                className='user-avatar'
            />
            <CommentInformation
                {...{ comment, auth, replies, smallBlock, componentId }}
            />
        </CommentBlock>
    );
};

export default FooterComment;
