import React from 'react';
import { TextDiv } from './post-text.style';
import { StyledText } from '../../common/style/index';
const PostText = ({ text }) => {
    return (
        <TextDiv width='100%' minHeight={[250]}>
            <StyledText align='justify' size='1em'>
                <pre>{text}</pre>
            </StyledText>
        </TextDiv>
    );
};

export default PostText;
