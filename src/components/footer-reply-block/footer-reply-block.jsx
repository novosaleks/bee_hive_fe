import { useState } from 'react';
import FooterReplyComment from '../footer-reply-comment/footer-reply-comment';

import { ReplyPreview, ReplyUL } from './footer-reply-block.style';

const FooterReplyBlock = ({ replies }) => {
    const [openReplyState, setOpenReplyState] = useState(false);
    const handlerClickReplies = () => {
        setOpenReplyState(prevState => !prevState);
    };

    return replies && replies.length !== 0 ? (
        <>
            <ReplyPreview onClick={handlerClickReplies}>
                {!openReplyState
                    ? `View all ${replies.length} replies`
                    : `Hide replies`}
            </ReplyPreview>
            {openReplyState && (
                <ReplyUL className='reply-ul'>
                    {replies &&
                        replies.map(reply => (
                            <li key={reply.commentId}>
                                <FooterReplyComment comment={reply} />
                            </li>
                        ))}
                </ReplyUL>
            )}
        </>
    ) : null;
};

export default FooterReplyBlock;
