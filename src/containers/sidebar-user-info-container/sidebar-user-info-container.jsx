import { Link } from 'react-router-dom';
import UserAvatar from '../../components/user-avatar';
import UserInfo from '../../components/user-info';
import UserExtraInfo from '../../components/user-extra-info';
import FollowButton from '../../components/follow-button';

import { GET_CURRENT_USER } from '../../graphql/user';

import { StyledSidebarDiv } from './sidebar-user-info-container.style';
import { DivLine, StyledText, Button } from '../../common/style/index';
import useQueriedData from '../../common/hooks/useQueriedData';

const SideBarUserInfo = ({ user }) => {
    const {data: userData, fallback} = useQueriedData(GET_CURRENT_USER);
    return (
        fallback || (
            <StyledSidebarDiv>
                <UserAvatar
                    ratingColor={user?.karma || '0'}
                    photo={user.avatar?.url}
                    rateScore={user?.karma || '0'}
                    width={[130, 190]}
                    height={[130, 190]}
                />
                <StyledText>{`${user.firstName} ${user.lastName}`}</StyledText>
                <DivLine />
                <StyledText color={'#5dac38'}>{'Online'}</StyledText>
                <DivLine />
                <UserInfo user={user} />
                {userData.currentUser.id !== user.id && (
                    <>
                        <FollowButton
                            userId={user.id}
                            currentUserId={userData.currentUser.id}
                        />

                        <Link to={`/subscription/${user.id}`}>
                            <Button
                                backgroundColor='#72898F'
                                borderColor='#DFEEEA'
                                color='#DFEEEA'
                                width='100%'>
                                Subsciptions
                            </Button>
                        </Link>
                    </>
                )}
                <UserExtraInfo user={user} />
            </StyledSidebarDiv>
        )
    );
};

export default SideBarUserInfo;
