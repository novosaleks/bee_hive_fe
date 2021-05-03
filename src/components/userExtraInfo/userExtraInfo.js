import { useState } from 'react';

import moreInfo from '../../assets/moreInfo.svg';
import { MoreInfoImg, UserExtraInfoBlock, UserExtraInfoDiv } from './userExtraInfo.style';
import { StyledText } from '../../common/style/index';

const UserExtraInfo = (props) => {
   const [openState, setOpenState] = useState(false)

   const handlerClick = () => {
      setOpenState((prevState) => !prevState)
   }
   return (<>
      <MoreInfoImg src={moreInfo} alt="additinal information about user" onClick={handlerClick} />
      <UserExtraInfoBlock>
         {openState && props.children.map((child, index) => (
            <UserExtraInfoDiv width="80%" key={index}>
               <StyledText size="1rem" >{child[1].data}</StyledText>
            </UserExtraInfoDiv>
         ))}
      </UserExtraInfoBlock>

   </>
   );
}

export default UserExtraInfo;