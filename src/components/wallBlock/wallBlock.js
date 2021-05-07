import React from 'react';

import NewPostInput from '../newPostInput';
import UsersNews from '../../containers/userNews-container';
import Title from '../title';

import { InputDiv } from './wallBlock.style';

import { DivLine, StyledDiv } from '../../common/style/index';
const WallBlock = () => {
   return (
      <StyledDiv marginTop='5%'>
         <InputDiv>
            <NewPostInput />
         </InputDiv>
         <StyledDiv marginTop='10%'>
            <Title>Wall</Title>
            <UsersNews />
            <DivLine />
            <UsersNews />
            <DivLine />
            <UsersNews />
         </StyledDiv>

      </StyledDiv>
   );
};

export default WallBlock;
