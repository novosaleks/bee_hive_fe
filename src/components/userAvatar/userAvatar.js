import React from 'react';
import { DivImgForUserAvatar, RateScore } from './userAvatar.style';


const UserAvatar = (props) => {
   return (
      <DivImgForUserAvatar {...props}>
         <RateScore>
            {props.rateScore}
         </RateScore>
      </DivImgForUserAvatar>
   );
}

export default UserAvatar;