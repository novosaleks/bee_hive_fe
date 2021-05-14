import React from 'react';

import { StyledText } from '../../common/style/index';

const UserInfo = (props) => {
   return (<>
      {props.children.map((child, index) => (
         <StyledText size="1rem" key={index}>{child[1].data}</StyledText>
      ))}
   </>
   );
}

export default UserInfo;