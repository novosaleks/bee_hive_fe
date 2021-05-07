import React from 'react';
import UserAvatar from '../../components/userAvatar';
import PostAuthorAndData from '../../components/postAuthorAndData';
import FollowButton from '../followButton';
import { StyledDiv } from '../../common/style/index';
import { NavLink } from '../../common/style';
const SubscriptionUser = ({
   name,
   photo,
   status,
   ratingColor,
   statusColor,
   rateScore,
   isFollow,
   login
}) => {
   return (
      <StyledDiv align='center' mt={10} mb={15} direction='row' content='space-between' >
         <StyledDiv width='18%'>
            <UserAvatar
               rating={ratingColor || '#C53B0E'}
               rateScore={rateScore || '1,5'}
               photo={photo}
               width={[70, 135]}
               height={[70, 135]} />

         </StyledDiv>

         <StyledDiv width='80%' align='flex-end'>
            <FollowButton
               isFollow={isFollow}
               width='150px'
               height='30px' />
            <NavLink to={`/${login}`} width={1} >
               <PostAuthorAndData
                  name={name || 'First and last name'}
                  data={status || 'Online'}
                  color={statusColor || '#5DAC38'} />
            </NavLink>

         </StyledDiv>
      </StyledDiv>
   );
}

export default SubscriptionUser;