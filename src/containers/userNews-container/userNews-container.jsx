import React from 'react';
import UserAvatarAndStatusOnline from '../../components/userAvatarAndStatusOnline';
import UserNewsRightBar from '../../components/userNewsRightBar';
import { StyledDiv } from '../../common/style/index';

const UserNews = ({
   name,
   status,
   ratingColor,
   statusColor,
   rateScore,
   photo,
   date,
   massege
}) => {
   return (
      <StyledDiv align='flex-start' mt='10%' mb='10%' direction='row' content='space-between'>
         <UserAvatarAndStatusOnline {...{
            status,
            ratingColor,
            statusColor,
            rateScore,
            photo
         }} />

         <UserNewsRightBar {...{
            name,
            date,
            massege
         }} />
      </StyledDiv>

   );
}

export default UserNews;