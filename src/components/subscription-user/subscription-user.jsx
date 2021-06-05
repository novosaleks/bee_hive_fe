import UserAvatar from '../user-avatar';
import PostAuthorAndData from '../post-author-and-data';
import { StyledDiv } from '../../common/style/index';

const SubscriptionUser = ({ user, smallBlock }) => {
    return (
        <StyledDiv
            align='center'
            mt={10}
            mb={15}
            direction='row'
            content='space-between'>
            <StyledDiv width='18%'>
                <UserAvatar
                    rating={user?.ratingColor || '#C53B0E'}
                    rateScore={user?.rateScore || '1,5'}
                    photo={user?.avatar?.location}
                    width={smallBlock ? 70 : [70, 135]}
                    height={smallBlock ? 70 : [70, 135]}
                    {...{ smallBlock }}
                />
            </StyledDiv>

            <StyledDiv
                width={smallBlock ? '70%' : '80%'}
                align='flex-end'
                ml='20px'>
                <PostAuthorAndData
                    name={`${user?.firstName} ${user?.lastName}`}
                    date={user?.status || 'Online'}
                    color={user?.statusColor || '#5DAC38'}
                    authorId={user.id}
                    {...{ smallBlock }}
                />
            </StyledDiv>
        </StyledDiv>
    );
};

export default SubscriptionUser;
