import styled from 'styled-components';
import { StyledDiv } from '../../common/style';

export const Notifications = styled(StyledDiv)`
    @media (max-width: 700px) {
        width: 90%;
        margin-left: 10%;
        i {
            font-size: 1rem;
        }
        p {
            font-size: 0.9rem;
        }
    }
`;
