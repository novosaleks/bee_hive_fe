import React from 'react';

import NewPostInput from '../newPostInput';
import UsersNews from '../../containers/userNews-container';
import Title from '../title';

import { HrLine, StyledDiv } from '../../common/style/index';
import { PublicationBodyDiv } from './publications.style';

const Publications = () => {
   return (
      <StyledDiv marginTop="5%" >
         <Title>Publications</Title>
         <PublicationBodyDiv>
            <NewPostInput />
            <UsersNews />
            <HrLine color="#F15A29" />
            <UsersNews />
            <HrLine color="#F15A29" />
            <UsersNews />
         </PublicationBodyDiv>

      </StyledDiv>
   );
}

export default Publications;
