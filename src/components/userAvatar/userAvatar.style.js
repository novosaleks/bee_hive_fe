import styled from 'styled-components';
import { getValueFromTheme } from '../../common/utils';
import { layout } from 'styled-system';

const media = {
    mobile: '@media(max-width: 700px)'
}

export const DivImgForUserAvatar = styled.div`
    display:flex;
    justify-content: flex-end;
    ${layout}
    border-radius: 50%;
    -moz-border-radius: 50%;
    -webkit-border-radius: 50%;
    -khtml-border-radius: 50%;
    background-color: ${getValueFromTheme('primaryBgColorDiv')};
    border: 10px solid ${props => props.rating || getValueFromTheme('primaryBgColorDiv')};
    
    &img{
         display: block;
         width:100%;
         border-radius: 50%;
         -moz-border-radius: 50%;
         -webkit-border-radius: 50%;
    }
`;


export const RateScore = styled.div`
    width:50px;
    height: 25px;
    text-align:center;
    background-color:${getValueFromTheme('primaryBgColorDiv')};
    align-self: flex-end;
    border: 1px solid ${getValueFromTheme('primaryBgColorPage')};
    ${media.mobile}{
      display:none;
   }
`
