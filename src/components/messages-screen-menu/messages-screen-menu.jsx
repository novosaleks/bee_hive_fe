import SidebarTab from '../sidebar-tab';
import { MenuWrapper, Hamburger, Menu } from './messages-screen-menu.style';

const MessagesScreenMenu = ({ activeTab, clickHandler, tabs }) => {
    return (
        <MenuWrapper>
            <input type='checkbox' className='toggler' />
            <Hamburger>
                <div />
            </Hamburger>
            <Menu className='menu'>
                <SidebarTab
                    {...{ activeTab, clickHandler, tabs }}
                    messageBlock={true}
                />
            </Menu>
        </MenuWrapper>
    );
};

export default MessagesScreenMenu;
