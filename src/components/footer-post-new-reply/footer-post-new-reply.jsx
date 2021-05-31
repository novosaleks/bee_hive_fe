import { useState } from 'react';

import FooterPostNewComment from '../footer-post-new-comment';

import { StyledText } from '../../common/style';

const FooterPostNewReply = ({ firstName, authorId, addresCommentId }) => {
    const [openState, setOpenState] = useState(false);
    const handlerClick = () => {
        setOpenState(prevState => !prevState);
    };

    return (
        <>
            <StyledText className='reply' onClick={handlerClick}>
                {!openState ? 'Reply' : `Reply to ${firstName}: `}
            </StyledText>
            {openState && (
                <FooterPostNewComment
                    setOpenNewCommentState={setOpenState}
                    reply={true}
                    addresseeId={authorId}
                    addresCommentId={addresCommentId}
                />
            )}
        </>
    );
};

export default FooterPostNewReply;
