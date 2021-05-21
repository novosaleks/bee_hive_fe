import React, { useState } from 'react';
import { Button } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

const FollowButton = props => {
    const [isFollow, setIsFollow] = useState(props.isFollow);
    const handlerClick = () => {
        setIsFollow(prevState => !prevState);
    };
    return (
        <Button
            fontFamily='Source Code Pro'
            color='#fff'
            width={props.width || 1}
            height={props.height || 30}
            mb='10px'
            backgroundColor={
                isFollow
                    ? getValueFromTheme('primaryBgColorDiv')
                    : getValueFromTheme('primaryColor')
            }
            onClick={handlerClick}>
            {isFollow ? 'Unfollow' : 'Follow'}
        </Button>
    );
};

export default FollowButton;
