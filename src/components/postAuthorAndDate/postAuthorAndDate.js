import React from 'react';
import {
    DivLine,
    StyledDiv,
    StyledText,
} from '../../common/style/index';

const PostAuthorAndDate = (props) => {
    return (
        <StyledDiv>
            <StyledDiv align='center' direction='row' content='space-between'>
                <StyledText fontSize={['1.2em', '1.6em']} align='left'>
                    {props.name}
                </StyledText>
                <StyledText fontSize={['0.6em', '0.7em']} align='right'>
                    {props.date}
                </StyledText>
            </StyledDiv>
            <DivLine/>
        </StyledDiv>
    );
};

export default PostAuthorAndDate;
