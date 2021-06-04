import ContactProvider from '../../common/context/contactContext';
import useContact from '../../common/hooks/useContact';

import FollowUser from '../follow-user';
import { StyledDiv } from '../../common/style/index';
const FollowUsersBlock = ({ tabsInfo, activeTab }) => {
    const users = useContact();

    return (
        <ContactProvider value={users}>
            {tabsInfo.map(
                info =>
                    info.label === activeTab && (
                        <StyledDiv
                            StyledDiv
                            alignSelf='center'
                            label={info.label}
                            key={info.label}>
                            <FollowUser follow={info.data} />
                        </StyledDiv>
                    )
            )}
        </ContactProvider>
    );
};

export default FollowUsersBlock;
