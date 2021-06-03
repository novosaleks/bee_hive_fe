import styled from 'styled-components';
import { StyledDiv, StyledText } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';

export const NotificationBlock = styled(StyledDiv)`
    border: 2px solid ${getValueFromTheme('primaryColor')};
    flex-direction: row;
    padding: 2%;
    margin-top: 2%;
    margin-bottom: 5%;
    width: 85vw;
    overflow: hidden;
`;
export const NotificationTextDiv = styled(StyledDiv)`
    align-items: flex-start;
    margin-left: 5%;
`;
export const NotificationText = styled(StyledText)`
    margin: 0;
    font-size: 1.2rem;
    text-align: left;
    span {
        color: ${props => getValueFromTheme(props.ratingTextColor)};
    }
`;
export const PostTextStyled = styled(StyledText)`
    width: 40vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-style: italic;
    opacity: 0.8;
    margin: 0;
`;
