import React from 'react';
import UserAvatar from '../user-avatar';
import { AvatarAndStatusDiv } from './user-avatar-and-status-online.style';
import { StyledText } from '../../common/style/index';
const UserAvatarAndStatusOnline = ({
   status,
   ratingColor,
   statusColor,
   rateScore,
   photo
}) => {
   return (
      <AvatarAndStatusDiv >
         <UserAvatar
            rating={ratingColor || '#C53B0E'}
            rateScore={rateScore || '1,5'}
            photo={photo} width={[70, 135]}
            height={[70, 135]} />
         <StyledText
            color={statusColor || '#5DAC38'}
         >
            {status || 'Drink coffeee'}
         </StyledText>
      </AvatarAndStatusDiv>
   );
}

export default UserAvatarAndStatusOnline;