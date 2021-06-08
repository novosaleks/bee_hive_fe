import { StyledText } from '../../common/style/index';
import { formatDate } from '../../common/utils';

const UserInfo = ({ user }) => {
    const withoutMin = true;
    return (
        <>
            <StyledText size='1rem'>
                {formatDate(user.birthDate, withoutMin)}
            </StyledText>
            <StyledText size='1rem'>{user.location}</StyledText>
        </>
    );
};

export default UserInfo;
