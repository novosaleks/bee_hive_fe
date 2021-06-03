import { DivImgForUserAvatar, RateScore } from './user-avatar.style';

const UserAvatar = props => {
    // props.photo.location -- url
    console.log(props.photo);
    return (
        <DivImgForUserAvatar {...props}>
            <RateScore {...props} className='rate'>
                {props.rateScore}
            </RateScore>
        </DivImgForUserAvatar>
    );
};

export default UserAvatar;
