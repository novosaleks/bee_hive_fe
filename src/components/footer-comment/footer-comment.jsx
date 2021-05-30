import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';

import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import FooterPostNewReply from '../footer-post-new-reply';

import { CommentInfoDiv, CommentBlock } from './footer-comment.style';
import { StyledText } from '../../common/style';

const FooterComment = ({ comment }) => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const users = data.getAllUsers;
    const auth = users && users.filter(user => user.id !== comment.authorId);
    const smallBlock = true;
    return (
        <CommentBlock>
            <UserAvatar
                rating={'#C53B0E'}
                rateScore={'1,5'}
                width={smallBlock ? 70 : [70, 135]}
                height={smallBlock ? 70 : [70, 135]}
                {...{ smallBlock }}
                className='user-avatar'
            />
            <CommentInfoDiv content='flex-start' ml='3px'>
                <PostAuthorAndData
                    {...{ smallBlock }}
                    name={`${auth[0].firstName} ${auth[0].lastName}`}
                    date={comment.createdAt}
                />
                <StyledText className='content'>{comment.content}</StyledText>
                <FooterPostNewReply
                    firstName={auth[0].firstName}
                    authorId={comment.authorId}
                    content={comment.content}
                />
            </CommentInfoDiv>
        </CommentBlock>
    );
};

export default FooterComment;
