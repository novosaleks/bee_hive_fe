import FooterComment from '../footer-comment';
import { GET_ALL_USERS } from '../../graphql/user';

import {
    AddresseeInfoBlock,
    ReplyCommentDiv,
} from './footer-reply-comment.style';
import { StyledText } from '../../common/style';
import useQueriedData from '../../common/hooks/useQueriedData';

const FooterReplyComment = ({ comment }) => {
    const [data, fallback] = useQueriedData(GET_ALL_USERS);

    if (fallback) {
        return fallback;
    }

    const users = data.getAllUsers;
    const addressee =
        users && users.find(user => user.id === comment.addresseeId);
    return (
        <ReplyCommentDiv>
            <AddresseeInfoBlock>
                <StyledText className='replied-to'>
                    Replied to {`${addressee.firstName} ${addressee.lastName}`}
                    {': '}
                </StyledText>
            </AddresseeInfoBlock>
            <FooterComment comment={comment} replyBlock={true} />
        </ReplyCommentDiv>
    );
};

export default FooterReplyComment;
