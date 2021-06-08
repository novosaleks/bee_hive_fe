import styled from 'styled-components';
import { StyledDiv } from '../../common/style';

export const MessagesContactHeader = styled(StyledDiv)`
    flex-direction: row;
    @media (max-width: 400px) {
        width: 95%;
        box-sizing: border-box;
        margin-left: 4%;
        .user-avatar {
            height: 55px;
            min-width: 30px;
            width: 60px;
            border-width: 2px;
        }
    }
`;
export const LeftArrow = styled.button`
    display: none;
    width: 30px;
    height: 30px;
    transition: 0.3s;
    box-shadow: -3px 3px 0 rgba(0, 0, 0, 0.5);
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
    transition: 0.5s;
    transform: rotate(45deg);
    margin-left: 10px;
    &hover {
        box-shadow: -3px 3px 0 rgba(255, 255, 255);
    }
    @media (max-width: 700px) {
        display: flex;
    }
    @media (max-width: 400px) {
        margin-left: 5px;
    }
`;
