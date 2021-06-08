import { GET_ALL_USERS } from '../../graphql/user';

import UserAvatar from '../user-avatar';
import CommentInformation from '../comment-information';

import { CommentBlock } from './footer-comment.style';
import useQueriedData from '../../common/hooks/useQueriedData';

const FooterComment = ({
    comment,
    allReplies,
    replyBlock,
    componentId,
    photoModal,
}) => {
    const {data, fallback} = useQueriedData(GET_ALL_USERS);

    if (fallback) {
        return fallback;
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
                ratingColor={auth?.karma || '0'}
                rateScore={auth?.karma || '0'}
                photo={auth.avatar?.url}
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
