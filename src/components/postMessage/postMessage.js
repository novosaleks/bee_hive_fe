import React from 'react';
import { MessageDiv } from './postMessage.style';
import { StyledText } from '../../common/style/index';
const PostMessage = ({ message }) => {
   return (
      <MessageDiv width="100%" minHeight={[250]}>
         <StyledText align="justify" size="1em">
            {message || " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}
         </StyledText>
      </MessageDiv>
   );
}

export default PostMessage;
