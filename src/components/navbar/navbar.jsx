import { useState } from 'react';
import {
    InnerContent,
    NavbarLinks,
    NavbarWrapper,
    MobileMenu,
    MobileNavbarLinks,
    Hamburger,
    MenuWrapper,
} from './navbar.style';

import NavbarDropDownMenu from '../navbar-dropdown-menu';
import logo_mini from '../../assets/logo_mini.svg';
import { DivLine } from '../../common/style';

const Navbar = ({ children }) => {
    const [openState, setOpenState] = useState(false);
    const handlerClick = () => {
        setOpenState(prevState => !prevState);
    };
    return (
        <NavbarWrapper>
            <InnerContent>
                <img src={logo_mini} alt='logo' />
                <NavbarLinks>{children}</NavbarLinks>
                <NavbarDropDownMenu />
                <MenuWrapper onClick={handlerClick} isOpen={openState}>
                    <input type='checkbox' className='toggler' />
                    <Hamburger>
                        <div />
                    </Hamburger>
                </MenuWrapper>
            </InnerContent>
            <DivLine />
            <MobileNavbarLinks isOpen={openState} onClick={handlerClick}>
                {children}
            </MobileNavbarLinks>
        </NavbarWrapper>
    );
};

export default Navbar;
