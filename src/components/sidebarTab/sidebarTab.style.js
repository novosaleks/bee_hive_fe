import styled from 'styled-components';
import { StyledDiv, media, DivLine } from '../../common/style/index';
import { getValueFromTheme } from '../../common/utils';


export const TabsDivStyled = styled(StyledDiv)`
   width:20%;
   cursor: pointer;
   align-self: center;
   margin-right: 5%;
      ${media.mobile} {
         flex-direction: row;
          width:60%;
      };
`;
export const TabDivStyled = styled(StyledDiv)`
   flex-direction: row;
   justify-content: flex-start;
   
   ${media.mobile} {
         flex-direction: column;
         justify-content: center;
      };
`;
export const TabAndLineDiv = styled(StyledDiv)`
${media.laptop && media.mobile}{
   flex-direction: row;
};
`;
export const TabLine = styled(DivLine)`
   ${media.laptop && media.mobile}{
      height: 103px;
      width: 2px;
   };
`;

export const TabWrapper = styled(StyledDiv)`
&.active{
      background-color: ${getValueFromTheme('primaryBgColor')};
   };
`;