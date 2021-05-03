import React from 'react';

import { useState, useRef, useEffect } from 'react';
import RatingSuns from '../ratingSuns';
import RateExplanation from '../rateExplanation';
import hintImg from '../../assets/hintImg.svg';
import { RateDiv, RatingHintImg } from './rateBlock.style';
import { StyledDiv, Button } from '../../common/style/index';


const RateBlock = () => {
   const RatingHintImgRef = useRef();
   const [openState, setOpenState] = useState(false)
   const [bottomOfRatingHintImg, setBottomOfRatingHintImg] = useState(null);

   const handlerClick = () => {
      setOpenState((prevState) => !prevState)
   }

   const scrollHandler = () => {
      setBottomOfRatingHintImg(RatingHintImgRef.current.getBoundingClientRect().bottom + window.pageYOffset)
   };
   useEffect(() => {
      window.addEventListener("scroll", scrollHandler, true);
      return () => {
         window.removeEventListener("scroll", scrollHandler, true);
      };
   }, []);
   return (
      <StyledDiv ref={RatingHintImgRef}>
         <RateDiv direction="row" content="space-between" >
            <Button width={'100px'} height={'30px'} backgroundColor={'transparent'} borderColor={'#F15A29'} fontSize={'1em'} >
               Rate it!
            </Button>
            <RatingSuns />
            <RatingHintImg src={hintImg} onClick={handlerClick} openState={openState} ref={RatingHintImgRef} />
         </RateDiv>
         {openState && <RateExplanation hintBottom={bottomOfRatingHintImg} />}
      </StyledDiv>
   );
}

export default RateBlock;