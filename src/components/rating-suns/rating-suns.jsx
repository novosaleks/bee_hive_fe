import { useState } from 'react';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { SET_OPINION_BY_POST_ID } from '../../graphql/opinion';
import { OPINIONS } from '../../common/utils/constants';
import { useNotificationService } from '../../common/context/notificationContext';

import reallyBad from '../../assets/sun1.svg';
import bad from '../../assets/sun2.svg';
import nautral from '../../assets/sun3.svg';
import good from '../../assets/sun4.svg';
import reallyGood from '../../assets/sun5.svg';

import { StyledDiv } from '../../common/style/index';
import { StyledImg } from './rating-suns.style';

const RatingSuns = ({ postId }) => {
    const [setOpinionByPostId, { data }] = useMutation(SET_OPINION_BY_POST_ID);
    const notify = useNotificationService();
    const [sunState, setActiveSunState] = useState(null);
    const suns = [
        { src: reallyBad, alt: 'really bad post' },
        { src: bad, alt: 'just bad post' },
        { src: nautral, alt: 'nautral post' },
        { src: good, alt: 'just good post' },
        { src: reallyGood, alt: 'really good post' },
    ];
    useEffect(() => {
        if (data) {
            const response = data.setOpinionByPostId;
            if (response) {
                console.log(response);
                notify({ text: response.message, type: 'success' });
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

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

    const handelClick = index => {
        toggleActive(index);
        setUserOpinion(index);
    };

    return (
        <StyledDiv direction='row' content='space-between' width='130px'>
            {suns.map((sun, index) => (
                <StyledImg
                    key={sun.alt}
                    className={toggleActiveStyles(index)}
                    onClick={() => {
                        handelClick(index);
                    }}
                    {...sun}
                />
            ))}
        </StyledDiv>
    );
};

export default RatingSuns;
