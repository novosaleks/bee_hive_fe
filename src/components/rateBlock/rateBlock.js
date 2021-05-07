import React from 'react';

import { useState, useRef, useEffect } from 'react';
import RatingSuns from '../ratingSuns';
import RateExplanation from '../rateExplanation';
import hintImg from '../../assets/hintImg.svg';
import { RateDiv, RatingHintImg } from './rateBlock.style';
import { StyledDiv } from '../../common/style/index';

const RateBlock = () => {
    const RatingBlockRef = useRef();
    const RatingHintRef = useRef();
    const [openState, setOpenState] = useState(false);
    const [bottomOfRatingBlock, setBottomOfRatingBlock] = useState(null);
    const [leftOfRatingBlock, setLeftOfRatingBlock] = useState(null);
    const handlerClick = () => {
        setOpenState((prevState) => !prevState);
    };

    const scrollHandler = () => {
        setBottomOfRatingBlock(
            RatingBlockRef.current.getBoundingClientRect().bottom +
            window.pageYOffset);
    };
    const resizeHandler = () => {
        setLeftOfRatingBlock(RatingHintRef.current.getBoundingClientRect().right);
    }
    useEffect(() => {
        window.addEventListener('resize', scrollHandler, true);
        window.addEventListener('resize', resizeHandler, true);

        return () => {
            window.removeEventListener('resize', scrollHandler, true);
            window.removeEventListener('resize', resizeHandler, true);
        };
    }, []);
    return (
        <StyledDiv>
            <RateDiv direction='row' content='flex-start'
                ref={RatingBlockRef}>
                <RatingSuns />
                <RatingHintImg
                    src={hintImg}
                    onClick={handlerClick}
                    alt='hint for rating scores'
                    ref={RatingHintRef} />
            </RateDiv>
            {openState && <RateExplanation hintBottom={bottomOfRatingBlock} hintLeft={leftOfRatingBlock} />}
        </StyledDiv>
    );
};

export default RateBlock;
