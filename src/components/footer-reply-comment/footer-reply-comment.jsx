import FooterComment from '../footer-comment';

import { useQuery } from '@apollo/client';
import { GET_ALL_USERS } from '../../graphql/user';

import {
    AddresseeInfoBlock,
    ReplyCommentDiv,
} from './footer-reply-comment.style';
import { StyledText } from '../../common/style';

const FooterReplyComment = ({ comment }) => {
    const { loading, error, data } = useQuery(GET_ALL_USERS);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }
    const users = data.getAllUsers;
    const addressee =
        users && users.filter(user => user.id !== comment.addresseeId);
    return (
        <ReplyCommentDiv>
            <AddresseeInfoBlock>
                <StyledText>
                    Reply to{' '}
                    {`${addressee[0].firstName} ${addressee[0].lastName}`}
                    {': '}
                </StyledText>
                <StyledText className='reply-content'>
                    {comment.replyContent}
                </StyledText>
            </AddresseeInfoBlock>
            <FooterComment comment={comment} />
        </ReplyCommentDiv>
    );
};

export default FooterReplyComment;
