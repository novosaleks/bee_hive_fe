import React, { useState } from 'react';
import { StyledDivPage, StyledPageWrapper } from '../../common/style';
import SidebarTab from '../../components/sidebarTab';

import settingsGeneral from '../../assets/settings-general.svg';
import settingsPage from '../../assets/settings-page.svg';
import TabsContentContainer from '../../containers/tabs-content-container';

const SettingsScreen = () => {
    const tabs = {
        settingsPage: [
            {
                img: settingsGeneral,
                title: 'General information',
                label: 'general information',
            },
            {
                img: settingsPage,
                title: 'Page settings',
                label: 'page settings',
            },
        ],
    };

    const [activeTab, setActiveTab] = useState(tabs.settingsPage[0].label);

    const clickHandler = (label) => () => {
        setActiveTab(label);
    };

    return (
        <StyledPageWrapper>
            <StyledDivPage>
                <SidebarTab {...{activeTab, clickHandler}}
                    tabs={tabs.settingsPage}/>
                <TabsContentContainer/>
            </StyledDivPage>
        </StyledPageWrapper>
    );
};

export default SettingsScreen;
