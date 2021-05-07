import React from 'react'
import FollowUser from '../followUser';
import { StyledDiv } from '../../common/style/index';
const FollowUsersBlock = ({ tabsInfo, activeTab }) => {

   return (
      <>
         {
            tabsInfo.map((info, index) => (
               info.label === activeTab &&
               <StyledDiv StyledDiv alignSelf='center' label={info.label} key={index} >
                  <FollowUser follow={info.data} />
               </StyledDiv>
            ))
         }
      </>
   )

}

export default FollowUsersBlock;
