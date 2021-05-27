import styled from 'styled-components';
import { StyledDiv } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';

export const PublicationBodyDiv = styled(StyledDiv)`
    background-color: ${getValueFromTheme('primaryBgColor')};
`;
export const UserPostBlock = styled.div`
    width: 100%;
    align-self: flex-end;
`;
