import { DivImgForUserAvatar, RateScore } from './user-avatar.style';

const UserAvatar = props => {
    return (
        <DivImgForUserAvatar {...props} className='user-avatar'>
            <RateScore {...props}>{props.rateScore}</RateScore>
        </DivImgForUserAvatar>
    );
};

export default UserAvatar;
