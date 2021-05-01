import React from 'react';

import { useState } from 'react';
import RatingSuns from '../ratingSuns';
import RateExplanation from '../rateExplanation';
import hintImg from '../../assets/hintImg.svg';
import { RateDiv, RateTitleDiv, RatingHintImg } from './rateBlock.style';
import { StyledDiv, StyledText } from '../../common/style/index';


const RateBlock = () => {
   const [openState, setOpenState] = useState(false)

   const handlerClick = () => {
      setOpenState((prevState) => !prevState)
   }
   return (
      <StyledDiv>
         <RateDiv direction="row" content="space-between" >
            <RateTitleDiv>
               <StyledText size="1em">
                  Rate it!
            </StyledText>
            </RateTitleDiv>
            <RatingSuns />
            <RatingHintImg src={hintImg} alt="hint for rating scores" onClick={handlerClick} />
         </RateDiv>
         {openState && <RateExplanation />}
      </StyledDiv>
   );
}

export default RateBlock;