import { useState } from 'react';
import { useEffect } from 'react';
import { useMutation } from '@apollo/client';
import { useUpdateWall } from '../../common/context/updateWallContext';
import { SET_OPINION_BY_POST_ID } from '../../graphql/opinion';
import { OPINIONS, suns } from '../../common/utils/constants';
import { useNotificationService } from '../../common/context/notificationContext';

import { StyledDiv, StyledText } from '../../common/style/index';
import { StyledImg } from './rating-suns.style';

const RatingSuns = ({ postId, post }) => {
    const [sunState, setActiveSunState] = useState(null);
    const [setOpinionByPostId, { data }] = useMutation(SET_OPINION_BY_POST_ID);

    const notify = useNotificationService();
    const updateWall = useUpdateWall();

    useEffect(() => {
        if (data) {
            const response = data.setOpinionByPostId;
            if (response) {
                notify({ text: response.message, type: 'success' });
                updateWall();
            } else {
                notify({ text: response.message, type: 'fail' });
            }
        }
    }, [data]);

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
            {suns?.map((sun, index) => (
                <StyledDiv key={sun.alt}>
                    <StyledImg
                        role='button'
                        tabIndex='0'
                        className={sunState === sun.name ? 'active' : null}
                        onClick={() => {
                            handleClick(index);
                        }}
                        {...sun}
                    />
                    <StyledText m='0'>{post[sun.name]}</StyledText>
                </StyledDiv>
            ))}
        </StyledDiv>
    );
};

export default RatingSuns;
