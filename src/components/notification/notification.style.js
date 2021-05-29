import styled from 'styled-components';

const typeColor = {
    success: '#61fd63',
    fail: '#f34832',
    info: '#7392ef',
};

export const NotificationWrapper = styled.div`
  font-weight: 600;
  padding: 5px;
  background-color: ${props => typeColor[props.type]};
  display: flex;
  justify-content: center;
  align-items: center;
`;
