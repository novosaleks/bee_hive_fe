import { useRef, useState, useEffect } from 'react';
import NavbarDropdownMenuBody from '../navbar-dropdown-menu-body';
import dropdown from '../../assets/dropdown.svg';
import {
    NavbarDropdownMenuHeaderDiv,
    UserName,
} from './navbar-dropdown-menu.style';

import { useQuery } from '@apollo/client';
import { GET_CURRENT_USER } from '../../graphql/user';
import SelfAvatar from '../../containers/self-avatar';

const NavbarDropdownMenu = () => {
    const [headerBottom, setHeaderBottom] = useState(null);
    const [headerLeft, setHeaderLeft] = useState(null);
    const [openState, setOpenState] = useState(false);

    const HeaderRef = useRef();
    const resizeHandler = () => {
        setHeaderBottom(HeaderRef.current?.getBoundingClientRect().bottom);
        setHeaderLeft(HeaderRef.current?.getBoundingClientRect().left);
    };
    useEffect(() => {
        window.addEventListener('resize', resizeHandler, true);
        window.addEventListener('DOMContentLoaded', resizeHandler, true);
        resizeHandler();
        return () => {
            window.removeEventListener('resize', resizeHandler, true);
            window.removeEventListener('DOMContentLoaded', resizeHandler, true);
        };
    }, []);
    const { loading, error, data } = useQuery(GET_CURRENT_USER);

    if (loading) {
        return <div>LOADING...</div>;
    }

    if (error) {
        return <div>Error: {error.message}</div>;
    }

    const user = data.currentUser;

    const handlerClick = () => {
        setOpenState(prevState => !prevState);
    };

    return (
        <>
            <NavbarDropdownMenuHeaderDiv ref={HeaderRef} onClick={handlerClick}>
                <SelfAvatar
                    width={50}
                    height={50}
                    dropdownBlock={true}
                />
                <UserName>{user.firstName}</UserName>
                <img src={dropdown} alt='icon for dopdown menu' />
            </NavbarDropdownMenuHeaderDiv>
            <NavbarDropdownMenuBody
                left={headerLeft}
                bottom={headerBottom}
                isOpen={openState}
            />
        </>
    );
};

export default NavbarDropdownMenu;
