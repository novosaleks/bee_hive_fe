import styled, { css } from 'styled-components';
import { PrimaryBackground, media } from '../../common/style';
import hamburgerMenu from '../../assets/hamburger-menu.svg';
import cancelIcon from '../../assets/cancelIcon.svg';
export const NavbarWrapper = styled(PrimaryBackground)`
  padding: 2px 0;
`

export const InnerContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 85%;
  margin: 0 auto;
`

export const NavbarLinks = styled.div`
  display: flex;
  gap: 45px;
  font-size: 28px;
  ${media.mobile}{
  display: none;
}
`
export const MobileNavbarLinks = styled(PrimaryBackground)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: absolute;
  font-size: 28px;
  padding-left: 10%;
  transition: 1.2s;
  width: 100%;
  opacity:0;
  z-index:0;
  ${props => props.isOpen && css`
   opacity:1;
   z-index:1;
  `}
  & a{
    padding:1%;
  }
`;
export const MobileMenu = styled.div`
display: hidden;
 
${media.mobile}{
  background-image: url(${(props) => props.isOpen ? cancelIcon : hamburgerMenu});
  background-repeat: no-repeat;
  width: 55px;
  height: 60px;
  cursor: pointer;
}

`
