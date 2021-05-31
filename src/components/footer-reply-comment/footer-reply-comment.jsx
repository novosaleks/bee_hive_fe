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
        users && users.find(user => user.id === comment.addresseeId);
    return (
        <ReplyCommentDiv>
            <AddresseeInfoBlock>
                <StyledText>
                    Replied to {`${addressee.firstName} ${addressee.lastName}`}
                    {': '}
                </StyledText>
            </AddresseeInfoBlock>
            <FooterComment comment={comment} replyBlock={true} />
        </ReplyCommentDiv>
    );
};

export default FooterReplyComment;
