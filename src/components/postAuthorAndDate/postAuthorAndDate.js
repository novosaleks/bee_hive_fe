import React from 'react';
import { HrLine, StyledDiv, StyledText } from '../../common/style/index';

const PostAuthorAndDate = (props) => {
   return (
      <StyledDiv width="100%">
         <StyledDiv align="center" direction="row" content="space-between">
            <StyledText fontSize={['1.2em', '1.6em']} align="left">
               {props.name}
            </StyledText>
            <StyledText fontSize={['0.6em', '0.7em']} align="right">
               {props.date}
            </StyledText>
         </StyledDiv>
         <HrLine color="#F15A29" />
      </StyledDiv>
   );
}

export default PostAuthorAndDate;