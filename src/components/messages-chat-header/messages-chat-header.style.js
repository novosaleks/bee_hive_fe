import styled from 'styled-components';
import { StyledDiv, StyledText } from '../../common/style';
import { getValueFromTheme } from '../../common/utils';
import chat from '../../assets/chat.svg';
export const MessagesChatHeaderDiv = styled(StyledDiv)`
    flex-direction: row;
    justify-content: flex-start;
    cursor: pointer;
    padding: 5px;
    box-sizing: border-box;
    background-color: ${getValueFromTheme('primaryBgColor')};
`;

export const ImgMessagesChatHeaderDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    border: 2px solid ${getValueFromTheme('primaryColor')};
    background-color: ${getValueFromTheme('messagesScreenSidebarTextColor')};
    background-image: url(${chat});
    background-size: contain;
    background-position: center center;
    background-repeat: no-repeat;
`;
export const ContactsInfoMessagesChatHeader = styled(StyledDiv)`
    width: 90%;
    margin-left: 2%;
`;
export const NameMessagesChatHeaderDiv = styled(StyledText)`
    font-weight: 600;
    margin: 0;
    font-size: 1rem;
    width: 40vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: left;
`;
export const MembersMessagesChatHeaderDiv = styled(StyledText)`
    font-weight: 500;
    opacity: 0.8;
    color: ${getValueFromTheme('searchContactsBgColor')};
`;
