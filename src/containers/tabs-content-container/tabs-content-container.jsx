import React from 'react';
import GeneralInformationContainer from '../general-information-container';

const TabsContentContainer = ({label}) => {
    const tabsContent = {
        'general information': <GeneralInformationContainer/>,
        'page settings': <h1>Page settings</h1>,
    };

    return tabsContent[label];
};

export default TabsContentContainer;
