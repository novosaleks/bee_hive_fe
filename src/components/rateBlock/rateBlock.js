import React from 'react';

import { useState, useRef, useEffect } from 'react';
import RatingSuns from '../ratingSuns';
import RateExplanation from '../rateExplanation';
import hintImg from '../../assets/hintImg.svg';
import { RateDiv, RatingHintImg } from './rateBlock.style';
import { StyledDiv, Button } from '../../common/style/index';

const RateBlock = () => {
    const RatingBlockRef = useRef();
    const [openState, setOpenState] = useState(false);
    const [bottomOfRatingBlock, setBottomOfRatingBlock] = useState(null);
    const handlerClick = () => {
        setOpenState((prevState) => !prevState);
    };

    const scrollHandler = () => {
        setBottomOfRatingBlock(
            RatingBlockRef.current.getBoundingClientRect().bottom +
            window.pageYOffset);
    };
    useEffect(() => {
        window.addEventListener('scroll', scrollHandler, true);
        return () => {
            window.removeEventListener('scroll', scrollHandler, true);
        };
    }, []);
    return (
        <StyledDiv>
            <RateDiv direction='row' content='space-between'
                ref={RatingBlockRef}>
                <Button width={'100px'} height={'30px'}
                    backgroundColor={'transparent'} borderColor={'#f15a29'}
                    fontSize={'1em'}>
                    Rate it!
                </Button>
                <RatingSuns/>
                <RatingHintImg src={hintImg} onClick={handlerClick}
                    alt='hint for rating scores'/>
            </RateDiv>
            {openState && <RateExplanation hintBottom={bottomOfRatingBlock}/>}
        </StyledDiv>
    );
};

export default RateBlock;
