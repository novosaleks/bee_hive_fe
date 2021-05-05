import React from 'react';
import { InnerContent, NavbarLinks, NavbarWrapper, MobileMenu } from './navbar.style';

import logo_mini from '../../assets/logo_mini.svg';
import { DivLine } from '../../common/style';

const Navbar = ({children}) => {
    return (
        <NavbarWrapper>
            <InnerContent>
                <img src={logo_mini} alt='logo'/>
                <NavbarLinks>
                    {children}
                </NavbarLinks>
                <MobileMenu/>
            </InnerContent>
            <DivLine/>
        </NavbarWrapper>
    );
};

export default Navbar;
