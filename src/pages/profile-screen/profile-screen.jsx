import { useEffect, useState } from 'react';

import AlbumsContainer from '../../containers/albums-container';
import SideBarUserInfo from '../../containers/sidebar-user-info-container';
import Wall from '../../components/wall';
import {
    StyledPageWrapper,
    StyledDivPage,
    StyledPageContent,
} from '../../common/style/index';
import { useParams } from 'react-router-dom';
import useQueriedData from '../../common/hooks/useQueriedData';
import { GET_USER_BY_ID } from '../../graphql/user';

const ProfileScreen = () => {
    const [user, setUser] = useState(null);
    const { userId } = useParams();
    const { data, fallback } = useQueriedData(GET_USER_BY_ID, {
        variables: { userId: userId },
    });

    useEffect(() => {
        if (data) {
            setUser(data.getUserById);
        }
    }, [data]);

    return (
        fallback || (
            <>
                {user && (
                    <StyledPageWrapper>
                        <StyledDivPage>
                            <SideBarUserInfo user={user} />
                            <StyledPageContent>
                                <AlbumsContainer user={user} />
                                <Wall user={user} />
                            </StyledPageContent>
                        </StyledDivPage>
                    </StyledPageWrapper>
                )}
            </>
        )
    );
};

export default ProfileScreen;
