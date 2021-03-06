import Navbar from '../../components/navbar';

import { NavLink } from '../../common/style';

const NavbarContainer = () => {
    return (
        <Navbar>
            <NavLink to='/'>Profile</NavLink>
            <NavLink to='/subscription'>Subscriptions</NavLink>
            <NavLink to='/messages'>Messages</NavLink>
            <NavLink to='/news'>News</NavLink>
        </Navbar>
    );
};

export default NavbarContainer;
