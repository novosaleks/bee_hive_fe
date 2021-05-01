import React from 'react';
import { HrLine, StyledDiv, StyledText } from '../../common/style/index';
const Title = (props) => {
   return (
      <StyledDiv align="flex-start">
         <StyledText>
            {props.children}
         </StyledText>
         <HrLine color="#F15A29" />
      </StyledDiv>


   );
}

export default Title;