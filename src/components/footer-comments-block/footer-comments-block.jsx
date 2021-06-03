import FooterComment from '../footer-comment';
import { StyledDiv } from '../../common/style';

const FooterCommentsBlock = ({ comments, componentId, photoModal }) => {
    const allReplies = comments.filter(comment => comment.reply === true);
    return (
        <StyledDiv>
            {comments.map(
                comment =>
                    comment.reply !== true && (
                        <FooterComment
                            comment={comment}
                            allReplies={allReplies}
                            key={comment.commentId}
                            componentId={componentId}
                            photoModal={photoModal}
                        />
                    )
            )}
        </StyledDiv>
    );
};

export default FooterCommentsBlock;
