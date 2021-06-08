import UserAvatar from '../user-avatar';

import {
    NotificationBlock,
    NotificationTextDiv,
    NotificationText,
    PostTextStyled,
} from './action-notification.style';

const ActionNotification = ({ notification, user }) => {
    return (
        <NotificationBlock>
            <UserAvatar
                ratingColor={user?.karma || '0'}
                rateScore={user.rateScore || '0'}
                photo={user.avatar?.url}
                width={60}
                height={60}
                smallBlock={true}
            />
            <NotificationTextDiv>
                <NotificationText
                    ratingTextColor={notification.ratingTextColor}>
                    <i>{`${user.firstName} ${user.lastName} `}</i>
                    thinks that your post are
                    <span> {notification.rating}</span>
                </NotificationText>

                <PostTextStyled>Post: {notification.postText}</PostTextStyled>
            </NotificationTextDiv>
        </NotificationBlock>
    );
};

export default ActionNotification;
