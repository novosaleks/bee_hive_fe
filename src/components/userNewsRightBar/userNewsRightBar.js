import React from 'react';
import PostAuthorAndData from '../../components/postAuthorAndData';
import RateBlock from '../../components/rateBlock';
import PostMessage from '../../components/postMessage';
import { RightBarDiv } from './userNewsRightBar.style';
const UserNewsRightBar = ({
   name,
   date,
   massege }) => {
   return (
      <RightBarDiv >
         <PostAuthorAndData
            name={name || 'First and last name'}
            data={date || '23.04.2021'} />
         <PostMessage massege={massege} />
         <RateBlock />
      </RightBarDiv>
   );
}

export default UserNewsRightBar;