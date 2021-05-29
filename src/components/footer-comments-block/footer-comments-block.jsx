import FooterComment from '../footer-comment';
import { StyledDiv } from '../../common/style';

const FooterCommentsBlock = ({ comments }) => {
    console.log(comments);
    return (
        <StyledDiv>
            {comments.map(comment => (
                <FooterComment comment={comment} />
            ))}
        </StyledDiv>
    );
};

export default FooterCommentsBlock;
