import React from 'react';
import { ExplanationStyledDiv, ExplanationStyledText } from './rateExplanation.style';
import { StyledDiv } from '../../common/style/index';

import reallyBad from '../../assets/sun1.svg';
import bad from '../../assets/sun2.svg';
import nautral from '../../assets/sun3.svg';
import good from '../../assets/sun4.svg';
import reallyGood from '../../assets/sun5.svg';

const sunsRating = [[reallyBad, 'Really bad'], [bad, 'Bad'], [nautral, 'Nautral'], [good, 'Good'], [reallyGood, 'Really good']]
const RateExplanation = (props) => {
   return (
      <ExplanationStyledDiv {...props}>
         {sunsRating.map((sun, index) => (
            <StyledDiv direction="row" content="flex-start" key={index}>
               <img src={sun[0]} alt={sun[1]} />
               <ExplanationStyledText>
                  {sun[1]}
               </ExplanationStyledText>
            </StyledDiv>
         ))}
      </ExplanationStyledDiv>
   );
}

export default RateExplanation;