import React from 'react';
import {
   DivLine,
   StyledDiv,
   StyledText,
} from '../../common/style/index';

const PostAuthorAndData = (props) => {
   return (
      <StyledDiv>
         <StyledDiv align='center' direction='row' content='space-between'>
            <StyledText fontSize={props.onlineBlock ? '0.9em' : ['1.2em', '1.6em']} align='left'>
               {props.name}
            </StyledText>
            <StyledText fontSize={props.onlineBlock ? '0.7em' : ['0.6em', '1em']} align='right' color={props.color}>
               {props.data}
            </StyledText>
         </StyledDiv>
         <DivLine />
      </StyledDiv>
   );
};

export default PostAuthorAndData;
