import { StyledText } from '../../common/style/index';
import {
    TabsDivStyled,
    TabDivStyled,
    TabLine,
    TabAndLineDiv,
    TabWrapper,
} from './sidebar-tab.style';
const SidebarTab = ({ activeTab, clickHandler, messageBlock, tabs }) => {
    return (
        <TabsDivStyled messageBlock={messageBlock}>
            {tabs.map(tab => (
                <TabWrapper
                    mb='10px'
                    key={tab.label}
                    label={tab.label}
                    className={activeTab === tab.label ? 'active' : null}
                    onClick={clickHandler(tab.label)}
                    messageBlock={messageBlock}>
                    <TabAndLineDiv messageBlock={messageBlock}>
                        <TabDivStyled messageBlock={messageBlock}>
                            <img src={tab.img} alt={tab.alt} />
                            <StyledText ml={'10px'}>{tab.title}</StyledText>
                        </TabDivStyled>
                        <TabLine
                            backgroundColor='#C4C4C4'
                            mt='5px'
                            messageBlock={messageBlock}
                        />
                    </TabAndLineDiv>
                </TabWrapper>
            ))}
        </TabsDivStyled>
    );
};

export default SidebarTab;
