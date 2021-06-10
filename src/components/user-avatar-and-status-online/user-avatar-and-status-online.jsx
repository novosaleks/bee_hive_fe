import UserAvatar from '../user-avatar';
import { AvatarAndStatusDiv } from './user-avatar-and-status-online.style';
import { StyledText } from '../../common/style/index';
const UserAvatarAndStatusOnline = ({
    status,
    statusColor,
    rateScore,
    photo,
}) => {
    return (
        <AvatarAndStatusDiv>
            <UserAvatar
                rateScore={rateScore || '0'}
                photo={photo}
                width={[70, 135]}
                height={[70, 135]}
            />
            <StyledText color={statusColor}>{status}</StyledText>
        </AvatarAndStatusDiv>
    );
};

export default UserAvatarAndStatusOnline;
