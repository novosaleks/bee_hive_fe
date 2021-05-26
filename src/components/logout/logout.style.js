import styled from 'styled-components';
import logout from '../../assets/logout.svg';
export const LogoutDiv = styled.div`
    width: 20px;
    height: 20px;
    cursor: pointer;
    background-image: url(${logout});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    align-self: flex-start;
`;
