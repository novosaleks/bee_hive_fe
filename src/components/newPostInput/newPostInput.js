import React from 'react';
import { StyledDiv, StyledText } from '../../common/style/index';
import { InputPost, PostButton } from './newPostInput.style';

const NewPostInput = () => {
   return (
      <StyledDiv width="100%">
         <InputPost placeholder="Share your thoughts with the world!!" />
         <PostButton width={[135, 170]} height={[45, 65]} mt="3%">
            <StyledText fontSize={['0.7em', '0.9em']}>
               Post
            </StyledText>
         </PostButton>
      </StyledDiv>
   );
}

export default NewPostInput;