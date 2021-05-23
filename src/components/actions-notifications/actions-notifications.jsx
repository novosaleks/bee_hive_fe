import React from 'react';
import UserAvatar from '../user-avatar';
import { StyledDiv } from '../../common/style/index';
import {
    NotificationBlock,
    NotificationTextDiv,
    NotificationText,
    PostTextStyled,
} from './actions-notifications.style';
const NOTOFICATIONS_EXEMPLE = [
    {
        photo: 2,
        firstName: 'Mark',
        lastName: 'Jacobs',
        userRatingColor: '#c53b0e',
        userRateScore: '2',
        rating: 'really good',
        ratingTextColor: 'reallyGoodColor',
        postText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
        photo: 2,
        firstName: 'Mark',
        lastName: 'Jacobs',
        userRatingColor: '#c53b0e',
        userRateScore: '2',
        rating: 'good',
        ratingTextColor: 'goodColor',
        postText:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
];

const ActionsNotifications = () => {
    return (
        <StyledDiv>
            {NOTOFICATIONS_EXEMPLE.map(
                (
                    {
                        photo,
                        firstName,
                        lastName,
                        userRatingColor,
                        userRateScore,
                        rating,
                        ratingTextColor,
                        postText,
                    },
                    index
                ) => (
                    <NotificationBlock key={index}>
                        <UserAvatar
                            rating={userRatingColor}
                            rateScore={userRateScore}
                            photo={photo}
                            width={60}
                            height={60}
                            smallBlock={true}
                        />
                        <NotificationTextDiv>
                            <NotificationText ratingTextColor={ratingTextColor}>
                                <i>{`${firstName} ${lastName} `}</i>
                                thinks that your post are
                                <span> {rating}</span>
                            </NotificationText>

                            <PostTextStyled>Post: {postText}</PostTextStyled>
                        </NotificationTextDiv>
                    </NotificationBlock>
                )
            )}
        </StyledDiv>
    );
};

export default ActionsNotifications;
