import Logout from '../../components/logout';
import ToggleSwitchTheme from '../toggle-switch-theme';
import settings from '../../assets/settings.svg';

import { NavLink, DivLine } from '../../common/style';
import {
    NavbarDropdownMenuBodyDiv,
    NavbarDropdownItem,
} from './navbar-dropdown-menu-body.style';

const NavbarDropdownMenuBody = ({ left, bottom, isOpen }) => {
    return (
        <NavbarDropdownMenuBodyDiv {...{ left, bottom, isOpen }}>
            <NavbarDropdownItem direction='row'>
                <img src={settings} alt='settings icon' />
                <NavLink to='/settings'>Settings</NavLink>
            </NavbarDropdownItem>
            <DivLine backgroundColor='#677A87' mb='8%' />
            <NavbarDropdownItem>
                <ToggleSwitchTheme />
                <Logout />
            </NavbarDropdownItem>
        </NavbarDropdownMenuBodyDiv>
    );
};

export default NavbarDropdownMenuBody;
