import { StyledText } from '../../common/style/index';
import { formatDate } from '../../common/utils';

const UserInfo = ({ user }) => {
    return (
        <>
            <StyledText size='1rem'>{formatDate(user.birthDate)}</StyledText>
            <StyledText size='1rem'>{user.location}</StyledText>
        </>
    );
};

export default UserInfo;
