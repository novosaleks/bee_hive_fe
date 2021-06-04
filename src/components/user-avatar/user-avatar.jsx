import { DivImgForUserAvatar, RateScore } from './user-avatar.style';

const UserAvatar = props => {
    return (
        <DivImgForUserAvatar {...props}>
            <RateScore {...props} className='rate'>
                {props.rateScore}
            </RateScore>
        </DivImgForUserAvatar>
    );
};

export default UserAvatar;
