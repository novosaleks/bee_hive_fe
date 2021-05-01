import { useState } from 'react';

import moreInfo from '../../assets/moreInfo.svg';
import { UserExtraInfoDiv, MoreInfoImg, UserExtraInfoBlock } from './userExtraInfo.style';
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
            <UserExtraInfoDiv width="80%">
               <StyledText size="1rem" key={index}>{child}</StyledText>
            </UserExtraInfoDiv>
         ))}
      </UserExtraInfoBlock>

   </>
   );
}

export default UserExtraInfo;