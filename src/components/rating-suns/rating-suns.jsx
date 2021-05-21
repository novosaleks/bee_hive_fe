import React, { useState } from 'react';
import reallyBad from '../../assets/sun1.svg';
import bad from '../../assets/sun2.svg';
import nautral from '../../assets/sun3.svg';
import good from '../../assets/sun4.svg';
import reallyGood from '../../assets/sun5.svg';

import { StyledDiv } from '../../common/style/index';
import { StyledImg } from './rating-suns.style';

const RatingSuns = () => {
    const [sunState, setActiveSunState] = useState(null);
    const suns = [
        { src: reallyBad, alt: 'really bad post' },
        { src: bad, alt: 'just bad post' },
        { src: nautral, alt: 'nautral post' },
        { src: good, alt: 'just good post' },
        { src: reallyGood, alt: 'really good post' },
    ];

    const toggleActive = index => {
        setActiveSunState(prevState => {
            return prevState?.src !== suns[index].src ? suns[index] : null;
        });
    };

    const toggleActiveStyles = index => {
        if (suns[index].src === sunState?.src) {
            return 'active';
        }

        return null;
    };

    return (
        <StyledDiv direction='row' content='space-between' width='130px'>
            {suns.map((sun, index) => (
                <StyledImg
                    key={sun.alt}
                    className={toggleActiveStyles(index)}
                    onClick={() => {
                        toggleActive(index);
                    }}
                    {...sun}
                />
            ))}
        </StyledDiv>
    );
};

export default RatingSuns;
