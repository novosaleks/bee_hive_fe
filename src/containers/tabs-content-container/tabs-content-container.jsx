import React from 'react';
import GeneralInformationContainer from '../general-information-container';
import PageInformationContainer from '../page-information-container';

const TabsContentContainer = ({label}) => {
    const tabsContent = {
        'general information': <GeneralInformationContainer/>,
        'page settings': <PageInformationContainer/>,
    };

    return tabsContent[label];
};

export default TabsContentContainer;
