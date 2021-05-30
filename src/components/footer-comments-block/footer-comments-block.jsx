import FooterComment from '../footer-comment';
import { StyledDiv } from '../../common/style';
import FooterReplyComment from '../footer-reply-comment/footer-reply-comment';

const FooterCommentsBlock = ({ comments }) => {
    return (
        <StyledDiv>
            {comments.map(comment =>
                comment.reply !== true ? (
                    <FooterComment comment={comment} />
                ) : (
                    <FooterReplyComment comment={comment} />
                )
            )}
        </StyledDiv>
    );
};

export default FooterCommentsBlock;
