import { useState } from 'react';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SET_OPINION_BY_POST_ID } from '../../graphql/opinion';
import { OPINIONS } from '../../common/utils/constants';
import { useNotificationService } from '../../common/context/notificationContext';

import reallyBad from '../../assets/sun1.svg';
import bad from '../../assets/sun2.svg';
import neutral from '../../assets/sun3.svg';
import good from '../../assets/sun4.svg';
import reallyGood from '../../assets/sun5.svg';

import { StyledDiv } from '../../common/style/index';
import { StyledImg } from './rating-suns.style';

const RatingSuns = ({ postId, post }) => {
    const [setOpinionByPostId, { data }] = useMutation(SET_OPINION_BY_POST_ID);
    const notify = useNotificationService();
    const [sunState, setActiveSunState] = useState(null);
    const suns = [
        { src: reallyBad, alt: 'really bad post', name: 'veryBad' },
        { src: bad, alt: 'just bad post', name: 'bad' },
        { src: neutral, alt: 'neutral post', name: 'neutral' },
        { src: good, alt: 'just good post', name: 'good' },
        { src: reallyGood, alt: 'really good post', name: 'veryGood' },
    ];
    useEffect(() => {
        if (data) {
            const response = data.setOpinionByPostId;
            if (response) {
                notify({ text: response.message, type: 'success' });
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

    useEffect(() => {
        const value = Object.values(post).find(value => value === 1);
        const key = Object.keys(post).find(key => post[key] === value);
        setActiveSunState(key || null);
    }, []);

    const toggleActive = index => {
        setActiveSunState(prevState => {
            return prevState !== suns[index].name ? suns[index].name : null;
        });
    };

    const setUserOpinion = async index => {
        await setOpinionByPostId({
            variables: {
                postId: postId,
                opinion: Object.values(OPINIONS).find(
                    (value, i) => i === index
                ),
            },
        });
    };

    const handleClick = index => {
        toggleActive(index);
        setUserOpinion(index);
    };

    return (
        <StyledDiv direction='row' content='space-between' width='130px'>
            {suns.map((sun, index) => (
                <StyledImg
                    role='button'
                    tabIndex='0'
                    key={sun.alt}
                    className={sunState === sun.name ? 'active' : null}
                    onClick={() => {
                        handleClick(index);
                    }}
                    {...sun}
                />
            ))}
        </StyledDiv>
    );
};

export default RatingSuns;
