import React from 'react';
import { DivLine, StyledDiv, StyledText } from '../../common/style/index';

const Title = props => {
    return (
        <StyledDiv align='flex-start'>
            <StyledText>{props.children}</StyledText>
            <DivLine />
        </StyledDiv>
    );
};

export default Title;
