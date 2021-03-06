import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import { isOnline } from '../../common/utils';
import { StyledDiv } from '../../common/style/index';

const SubscriptionUser = ({ user }) => {
    return (
        <StyledDiv
            align='center'
            mt={10}
            mb={15}
            direction='row'
            content='space-between'>
            <StyledDiv width='18%'>
                <UserAvatar
                    rateScore={user?.karma || '0'}
                    photo={user?.avatar?.url}
                    width={[70, 135]}
                    height={[70, 135]}
                />
            </StyledDiv>

            <StyledDiv width={'80%'} align='flex-end' ml='20px'>
                <PostAuthorAndData
                    name={`${user?.firstName} ${user?.lastName}`}
                    date={isOnline(user?.lastVisit) ? 'Online' : 'Offline'}
                    color={isOnline(user?.lastVisit) ? '#5DAC38' : '#C53B0E'}
                    authorId={user.id}
                />
            </StyledDiv>
        </StyledDiv>
    );
};

export default SubscriptionUser;
