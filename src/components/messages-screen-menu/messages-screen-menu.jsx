import React from 'react';
import SidebarTab from '../sidebar-tab';
import { MenuWrapper, Hamburger, Menu } from './messages-screen-menu.style';

const MessagesScreenMenu = ({ activeTab, clickHandler, tabs }) => {
    return (
        <MenuWrapper>
            <input type="checkbox" class="toggle" />
            <Hamburger>
                <div></div>
            </Hamburger>
            <Menu>
                <SidebarTab
                    {...{ activeTab, clickHandler, tabs }}
                    messageBlock={true}
                />
            </Menu>
        </MenuWrapper>
    );
};

export default MessagesScreenMenu;
