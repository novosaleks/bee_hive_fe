import reallyBad from '../../assets/sun1.svg';
import bad from '../../assets/sun2.svg';
import neutral from '../../assets/sun3.svg';
import good from '../../assets/sun4.svg';
import reallyGood from '../../assets/sun5.svg';

export const THEMES = { dark: 'dark', light: 'light' };

export const OPINIONS = {
    VERY_BAD: 'VERY_BAD',
    BAD: 'BAD',
    NEUTRAL: 'NEUTRAL',
    GOOD: 'GOOD',
    VERY_GOOD: 'VERY_GOOD',
};

export const RatingColor = {
    0: 'defaultColor',
    1: 'reallyBadColor',
    2: 'badColor',
    3: 'neutralColor',
    4: 'goodColor',
    5: 'reallyGoodColor',
};

export const suns = [
    { src: reallyBad, alt: 'really bad post', name: 'veryBad' },
    { src: bad, alt: 'just bad post', name: 'bad' },
    { src: neutral, alt: 'neutral post', name: 'neutral' },
    { src: good, alt: 'just good post', name: 'good' },
    { src: reallyGood, alt: 'really good post', name: 'veryGood' },
];
