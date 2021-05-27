import UserAvatarAndStatusOnline from '../../components/user-avatar-and-status-online';
import UserNewsRightBar from '../../components/user-news-right-bar';
import { StyledDiv } from '../../common/style/index';

const UserNews = ({
    name,
    status,
    ratingColor,
    statusColor,
    rateScore,
    photo,
    date,
    postId,
    text,
    updatePublications
}) => {
    return (
        <StyledDiv
            align='flex-start'
            mt='10%'
            mb='10%'
            direction='row'
            content='space-between'>
            <UserAvatarAndStatusOnline
                {...{
                    status,
                    ratingColor,
                    statusColor,
                    rateScore,
                    photo,
                }}
            />

            <UserNewsRightBar
                {...{
                    name,
                    date,
                    postId,
                    text,
                    updatePublications
                }}
            />
        </StyledDiv>
    );
};

export default UserNews;
