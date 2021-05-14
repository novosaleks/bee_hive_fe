import React from 'react';
import { StyledText } from '../../common/style/index';
import { TabsDivStyled, TabDivStyled, TabLine, TabAndLineDiv, TabWrapper } from './sidebar-tab.style';
const SidebarTab = ({ activeTab, clickHandler, tabs }) => {

   return (
      <TabsDivStyled>
         {tabs.map((tab, index) => (
            <TabWrapper mb='10px' key={index} label={tab.label} className={activeTab === tab.label ? 'active' : null} onClick={() => clickHandler(tab.label)}>
               <TabAndLineDiv>
                  <TabDivStyled>
                     <img src={tab.img} alt={tab.alt} />
                     <StyledText ml={'10px'}>
                        {tab.title}
                     </StyledText>
                  </TabDivStyled>
                  <TabLine backgroundColor='#C4C4C4' mt='5px' />
               </TabAndLineDiv>
            </TabWrapper>
         ))
         }
      </TabsDivStyled >

   );
}

export default SidebarTab;