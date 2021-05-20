import React, { useState } from 'react';
import { InnerContent, NavbarLinks, NavbarWrapper, MobileMenu, MobileNavbarLinks } from './navbar.style';

import logo_mini from '../../assets/logo_mini.svg';
import { DivLine } from '../../common/style';

const Navbar = ({ children }) => {
    const [openState, setOpenState] = useState(false);
    const handlerClick = () => {
        setOpenState((prevState) => !prevState);
    };
    return (
        <NavbarWrapper>
            <InnerContent>
                <img src={logo_mini} alt='logo' />
                <NavbarLinks >
                    {children}
                </NavbarLinks>
                <MobileMenu onClick={handlerClick} isOpen={openState} />
            </InnerContent>
            <DivLine />
            <MobileNavbarLinks isOpen={openState}>
                {children}
            </MobileNavbarLinks>
        </NavbarWrapper>
    );
};

export default Navbar;
